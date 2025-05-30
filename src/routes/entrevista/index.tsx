import { createFileRoute } from "@tanstack/react-router";
import {
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  MessageSquare,
  Phone,
  Video,
} from "lucide-react";
import { TopBar } from "../../components/top-bar";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

export const Route = createFileRoute("/entrevista/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <TopBar
        title="Detalhes da Entrevista"
        showBackButton={true}
        backUrl="/notificacoes"
      />

      <div className="p-4 space-y-6">
        {/* Company Header */}
        <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <CardContent className="p-6 text-center">
            <div className="text-4xl mb-3">🌊</div>
            <h2 className="text-xl font-bold mb-1">Entrevista com TechWave</h2>
            <p className="text-blue-100">Estágio em Desenvolvimento Web</p>
          </CardContent>
        </Card>

        {/* Interview Details */}
        <Card className="dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Informações da Entrevista
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <div>
                <p className="font-medium dark:text-gray-200">
                  28/05/2024 • 15:00h
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Duração estimada: 45 minutos
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Video className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <div>
                <p className="font-medium dark:text-gray-200">
                  Online via Google Meet
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Link será enviado por email
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Preparation Tips */}
        <Card className="dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="dark:text-gray-200">
              Prepare-se para conversar sobre:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mt-0.5" />
                <div>
                  <p className="font-medium dark:text-gray-200">
                    Seus projetos
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Experiências e portfólio profissional
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mt-0.5" />
                <div>
                  <p className="font-medium dark:text-gray-200">
                    Conhecimentos técnicos
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    React, JavaScript, desenvolvimento web
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mt-0.5" />
                <div>
                  <p className="font-medium dark:text-gray-200">Motivação</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Por que você quer estagiar na TechWave
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="space-y-3">
          <Button className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 h-12">
            <CheckCircle className="h-5 w-5 mr-2" />
            Confirmar Presença
          </Button>

          <Button
            variant="outline"
            className="w-full h-12 dark:text-gray-200 dark:border-gray-700"
          >
            <Calendar className="h-5 w-5 mr-2" />
            Adicionar ao Google Agenda
          </Button>

          <Button
            variant="outline"
            className="w-full h-12 dark:text-gray-200 dark:border-gray-700"
          >
            <MessageSquare className="h-5 w-5 mr-2" />
            Enviar Feedback após entrevista
          </Button>
        </div>

        {/* Contact */}
        <Card className="bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800">
          <CardContent className="p-4">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Precisa de ajuda?
            </h3>
            <p className="text-sm text-blue-700 dark:text-blue-400 mb-3">
              Entre em contato conosco se tiver alguma dúvida
            </p>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="border-blue-300 text-blue-700 dark:border-blue-700 dark:text-blue-400"
              >
                <Mail className="h-4 w-4 mr-1" />
                Email
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-blue-300 text-blue-700 dark:border-blue-700 dark:text-blue-400"
              >
                <Phone className="h-4 w-4 mr-1" />
                Telefone
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
