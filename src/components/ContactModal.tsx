import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Mail, Send, ArrowLeft, Zap, CheckCircle, Loader2 } from "lucide-react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Tu nombre es necesario").max(100, "Máximo 100 caracteres"),
  contact: z.string().trim().min(1, "Necesitamos un medio para responderte").max(255, "Máximo 255 caracteres"),
  message: z.string().trim().min(1, "Cuéntanos en qué te ayudamos").max(1000, "Máximo 1000 caracteres"),
});

type ContactForm = z.infer<typeof contactSchema>;

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WHATSAPP_NUMBER = "529991234567";
const WHATSAPP_MESSAGE = "Hola, me interesa trabajar con TRINIUM. ¿Podemos platicar?";
const WEB3FORMS_ACCESS_KEY = "01f92a66-783e-4427-93ec-e042113ad373";

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const [view, setView] = useState<"options" | "form" | "success">("options");
  const [form, setForm] = useState<ContactForm>({ name: "", contact: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) {
      setTimeout(() => {
        setView("options");
        setErrors({});
      }, 300);
    }
    onOpenChange(isOpen);
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactForm;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: result.data.name,
          email: result.data.contact,
          message: result.data.message,
          subject: "Nuevo contacto desde TRINIUM",
          from_name: "Web TRINIUM",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setView("success");
        setForm({ name: "", contact: "", message: "" });
      } else {
        toast({
          title: "No pudimos enviar tu mensaje",
          description: "Intenta de nuevo o contáctanos por WhatsApp.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error de conexión",
        description: "No pudimos enviar tu mensaje. Intenta por WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md border-border/50 bg-background/95 backdrop-blur-xl">
        {view === "options" && (
          <>
            <DialogHeader className="text-center sm:text-center">
              <DialogTitle className="text-2xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">¿Cómo prefieres contactarnos?</span>
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Elige la opción que más te convenga
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-2 gap-4 py-6">
              <button
                onClick={handleWhatsApp}
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[hsl(142,70%,45%)]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-7 w-7 text-[hsl(142,70%,45%)]" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground">WhatsApp</p>
                  <p className="text-xs text-muted-foreground mt-1">Respuesta inmediata</p>
                </div>
              </button>

              <button
                onClick={() => setView("form")}
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground">Formulario</p>
                  <p className="text-xs text-muted-foreground mt-1">Déjanos tus datos</p>
                </div>
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Zap className="h-4 w-4 text-primary" />
              <span>Respondemos en menos de 24 hrs</span>
            </div>
          </>
        )}

        {view === "form" && (
          <>
            <DialogHeader className="text-center sm:text-center">
              <button
                onClick={() => { setView("options"); setErrors({}); }}
                className="absolute left-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <DialogTitle className="text-xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Cuéntanos tu proyecto</span>
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Te respondemos pronto con una propuesta
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  placeholder="¿Cómo te llamas?"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={errors.name ? "border-destructive" : ""}
                  maxLength={100}
                />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Email o teléfono</Label>
                <Input
                  id="contact"
                  placeholder="Para poder responderte"
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  className={errors.contact ? "border-destructive" : ""}
                  maxLength={255}
                />
                {errors.contact && <p className="text-xs text-destructive">{errors.contact}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">¿En qué te ayudamos?</Label>
                <Textarea
                  id="message"
                  placeholder="Cuéntanos brevemente tu idea o necesidad..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={cn("min-h-[100px]", errors.message && "border-destructive")}
                  maxLength={1000}
                />
                {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 rounded-full py-6 text-base group disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Enviar mensaje
                  </>
                )}
              </Button>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Zap className="h-4 w-4 text-primary" />
                <span>Respondemos en menos de 24 hrs</span>
              </div>
            </form>
          </>
        )}

        {view === "success" && (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <DialogHeader className="text-center sm:text-center">
              <DialogTitle className="text-xl font-bold">¡Mensaje enviado!</DialogTitle>
              <DialogDescription>
                Te contactaremos pronto. Gracias por tu interés.
              </DialogDescription>
            </DialogHeader>
            <Button
              variant="outline"
              onClick={() => handleClose(false)}
              className="rounded-full mt-2"
            >
              Cerrar
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
