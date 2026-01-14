import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Project = {
  name: string;
  description: string;
  icon?: LucideIcon;
  image?: string;
  fullDescription?: string;
  screenshots?: string[];
  features?: string[];
  url?: string;
};

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  const hasScreenshots = project.screenshots && project.screenshots.length > 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0">
        {/* Header */}
        <div className="p-6 pb-4 border-b border-border">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center overflow-hidden shrink-0">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-12 h-12 object-contain"
                />
              ) : project.icon ? (
                <project.icon className="w-8 h-8 text-primary-foreground" />
              ) : null}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {project.name}
              </h2>
              <p className="text-muted-foreground mt-1">
                {project.fullDescription || project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Screenshots Carousel */}
        {hasScreenshots && (
          <div className="p-6 bg-muted/30">
            <Carousel className="w-full">
              <CarouselContent>
                {project.screenshots!.map((screenshot, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-background border border-border shadow-lg">
                      <img
                        src={screenshot}
                        alt={`${project.name} screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {project.screenshots!.length > 1 && (
                <>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </>
              )}
            </Carousel>
            <p className="text-center text-sm text-muted-foreground mt-3">
              {project.screenshots!.length} {project.screenshots!.length === 1 ? 'imagen' : 'imágenes'}
            </p>
          </div>
        )}

        {/* Placeholder when no screenshots */}
        {!hasScreenshots && (
          <div className="p-6 bg-muted/30">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-center justify-center">
              <div className="text-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-24 h-24 object-contain mx-auto mb-4 opacity-50"
                  />
                ) : project.icon ? (
                  <project.icon className="w-24 h-24 text-muted-foreground/30 mx-auto mb-4" />
                ) : null}
                <p className="text-muted-foreground">
                  Próximamente más imágenes
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Features & Actions */}
        <div className="p-6 pt-4">
          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Características principales
              </h3>
              <ul className="grid gap-2">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.url && (
            <Button asChild className="w-full sm:w-auto">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver proyecto
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
