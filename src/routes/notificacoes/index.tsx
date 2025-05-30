import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, CheckCircle, Heart } from "lucide-react";
import { TopBar } from "../../components/top-bar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Route = createFileRoute("/notificacoes/")({
  component: RouteComponent,
});

function RouteComponent() {
  const notifications = [
    {
      id: 1,
      type: "match",
      title: "Match com TechWave",
      description:
        "Parabéns! Você foi selecionado para uma entrevista de estágio.",
      time: "2 min",
      action: "Ver detalhes",
      company: "TechWave",
      logo: "🌊",
    },
    {
      id: 2,
      type: "interview",
      title: "Entrevista agendada",
      description: "Sua entrevista está em 28/05 às 15:00h",
      time: "1h",
      action: "Confirmar",
      company: "TechWave",
      logo: "🌊",
    },
    {
      id: 3,
      type: "match",
      title: "Nenhum novo match",
      description: "Continue buscando oportunidades!",
      time: "hoje",
      action: null,
      company: null,
      logo: "💫",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <TopBar title="Notificações" showBackButton={true} />

      <div className="p-4 space-y-4">
        {notifications.map((notification) => (
          <Card
            key={notification.id}
            className="hover:shadow-md transition-shadow dark:bg-gray-800"
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {notification.type === "match" ? (
                    <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center">
                      {notification.logo === "💫" ? (
                        <span className="text-2xl">{notification.logo}</span>
                      ) : (
                        <Heart className="h-6 w-6 text-pink-500 dark:text-pink-400" />
                      )}
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        {notification.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {notification.description}
                      </p>
                      {notification.company && (
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg">{notification.logo}</span>
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            {notification.company}
                          </span>
                        </div>
                      )}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2">
                      {notification.time}
                    </span>
                  </div>

                  {notification.action && (
                    <div className="mt-3">
                      <Link to="/entrevista">
                        <Button
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white"
                        >
                          {notification.action}
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Summary Card */}
        <Card className="bg-primary/10 border-primary/20 dark:bg-primary/20 dark:border-primary/30">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-primary">Ótimo trabalho!</h3>
                <p className="text-sm text-primary/80">
                  Você tem 1 match ativo e 1 entrevista agendada.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
