import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, DollarSign, Heart, MapPin, X } from "lucide-react";
import { useRef, useState } from "react";
import { TopBar } from "../../components/top-bar";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { useToast } from "../../hooks/use-toast";

import {
  motion,
  type PanInfo,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Button } from "../../components/ui/button";

export const Route = createFileRoute("/tinder-vagas/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [matches, setMatches] = useState<number[]>([]);
  const { toast } = useToast();

  const jobs = [
    {
      id: 1,
      title: "Estágio em Desenvolvimento Web",
      company: "TechWave",
      location: "Remoto",
      salary: "R$ 1.200",
      type: "Remoto",
      description:
        "Trabalhe com tecnologias modernas, participe de projetos reais e desenvolva seu portfólio profissional.",
      requirements: ["React", "JavaScript", "HTML/CSS"],
      benefits: ["Flexibilidade", "Mentorias", "Vale Alimentação"],
      logo: "🌊",
    },
    {
      id: 2,
      title: "Estágio em Engenharia de Software",
      company: "InnovaTech",
      location: "São Paulo, SP",
      salary: "R$ 1.500",
      type: "Presencial",
      description:
        "Oportunidade para trabalhar com metodologias ágeis, desenvolvimento de sistemas e arquitetura de software.",
      requirements: ["Java", "Spring Boot", "SQL"],
      benefits: ["VT + VR", "Plano de Saúde", "Gymnasium"],
      logo: "🚀",
    },
    {
      id: 3,
      title: "Estágio em Data Science",
      company: "DataMinds",
      location: "Belo Horizonte, MG",
      salary: "R$ 1.800",
      type: "Híbrido",
      description:
        "Desenvolva modelos de machine learning e trabalhe com big data em projetos desafiadores.",
      requirements: ["Python", "Pandas", "SQL", "Machine Learning"],
      benefits: ["Curso inglês", "Certificações", "Home Office"],
      logo: "🧠",
    },
  ];

  const currentJob = jobs[currentJobIndex];
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-30, 30]);
  const cardOpacity = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5]);
  const likeOpacity = useTransform(x, [0, 100, 200], [0, 0.5, 1]);
  const nopeOpacity = useTransform(x, [-200, -100, 0], [1, 0.5, 0]);
  const dragConstraintsRef = useRef(null);

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "right") {
      setMatches([...matches, currentJob.id]);
      toast({
        title: "Match!",
        description: `Você deu match com ${currentJob.company}!`,
        duration: 3000,
      });
    }

    if (currentJobIndex < jobs.length - 1) {
      setCurrentJobIndex(currentJobIndex + 1);
    } else {
      // Redirect to matches page or show completion
      setTimeout(() => {
        window.location.href = "/notificacoes";
      }, 500);
    }
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 100) {
      handleSwipe("right");
    } else if (info.offset.x < -100) {
      handleSwipe("left");
    }
  };

  if (!currentJob) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            Parabéns!
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Você visualizou todas as vagas disponíveis.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <TopBar title="Tinder de Vagas" showBackButton={true} />

      <div className="p-4 pb-32" ref={dragConstraintsRef}>
        <motion.div
          style={{ x, rotate, opacity: cardOpacity }}
          drag="x"
          dragConstraints={dragConstraintsRef}
          onDragEnd={handleDragEnd}
          className="relative"
        >
          <Card className="max-w-md mx-auto shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white text-center">
              <div className="text-4xl mb-2">{currentJob.logo}</div>
              <Badge variant="secondary" className="mb-2">
                {currentJob.type}
              </Badge>
            </div>

            <CardContent className="p-6 space-y-4">
              <div className="text-center">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                  {currentJob.title}
                </h2>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  {currentJob.company}
                </p>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{currentJob.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  <span>{currentJob.salary}</span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {currentJob.description}
              </p>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Requisitos:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentJob.requirements.map((req, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {req}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Benefícios:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentJob.benefits.map((benefit, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Overlay indicators */}
          <motion.div
            className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-red-500 text-white p-4 rounded-full"
            style={{ opacity: nopeOpacity }}
          >
            <X className="h-8 w-8" />
          </motion.div>

          <motion.div
            className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-green-500 text-white p-4 rounded-full"
            style={{ opacity: likeOpacity }}
          >
            <Heart className="h-8 w-8" />
          </motion.div>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t dark:border-gray-700 p-6">
        <div className="flex items-center justify-center gap-6 max-w-md mx-auto">
          <Button
            onClick={() => handleSwipe("left")}
            size="lg"
            variant="outline"
            className="w-16 h-16 rounded-full border-2 border-red-200 hover:border-red-300 hover:bg-red-50 dark:border-red-900 dark:hover:border-red-800 dark:hover:bg-red-900/20"
          >
            <X className="h-8 w-8 text-red-500 dark:text-red-400" />
          </Button>

          <Button
            onClick={() => handleSwipe("right")}
            size="lg"
            className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
          >
            <Heart className="h-8 w-8 text-white" />
          </Button>

          <Button
            onClick={() => handleSwipe("right")}
            size="lg"
            variant="outline"
            className="w-16 h-16 rounded-full border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 dark:border-blue-900 dark:hover:border-blue-800 dark:hover:bg-blue-900/20"
          >
            <ArrowRight className="h-8 w-8 text-blue-500 dark:text-blue-400" />
          </Button>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Vaga {currentJobIndex + 1} de {jobs.length}
          </p>
        </div>
      </div>
    </div>
  );
}
