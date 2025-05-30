import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, GraduationCap, Heart, Star } from "lucide-react";
import { useState } from "react";
import { TopBar } from "../../components/top-bar";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [notifications] = useState([
    {
      id: 1,
      type: "locker",
      message: "Você possui um armário reservado com entrega para hoje.",
      time: "12:00",
    },
    {
      id: 2,
      type: "finance",
      message: "Você possui uma pendência no financeiro.",
      time: "12:00",
    },
  ]);

  const [subjects] = useState([
    {
      code: "S05",
      name: "Interface Homem-máquina",
      room: "P1-S17",
      time: "10:00",
      rating: 9,
      attendance: "10/25",
      nextEval: "12/05",
    },
    {
      code: "E01",
      name: "Circuitos Elétricos em Corrente Contínua",
      room: "P1-S17",
      time: "10:00",
      rating: 5,
      attendance: "10/25",
      nextEval: "12/05",
    },
    {
      code: "M02",
      name: "Álgebra e Geometria Analítica",
      room: "P1-S17",
      time: "10:00",
      rating: 7,
      attendance: "10/25",
      nextEval: "12/05",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <TopBar title="Inatel" />

      <div className="p-4 space-y-6 pb-20">
        {/* Welcome Section */}
        <Card className="bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800">
          <CardContent className="p-4">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Olá,{" "}
              <span className="text-blue-600 dark:text-blue-400">Lucas</span>
            </h2>

            <div className="space-y-3">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-start gap-3 bg-white dark:bg-gray-800 p-3 rounded-lg"
                >
                  <div className="w-10 h-10 bg-blue-600 dark:bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                    {notification.type === "locker" ? (
                      <GraduationCap className="h-5 w-5 text-white" />
                    ) : (
                      <Briefcase className="h-5 w-5 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {notification.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Link to="/tinder-vagas">
            <Card className="hover:shadow-md transition-shadow bg-primary text-white">
              <CardContent className="p-4 text-center">
                <Heart className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-semibold">Tinder de Vagas</h3>
                <p className="text-xs opacity-90 mt-1">
                  Encontre oportunidades
                </p>
              </CardContent>
            </Card>
          </Link>

          <Card className="hover:shadow-md transition-shadow bg-primary text-white">
            <CardContent className="p-4 text-center">
              <GraduationCap className="h-8 w-8 mx-auto mb-2" />
              <h3 className="font-semibold">Cursos</h3>
              <p className="text-xs opacity-90 mt-1">Suas disciplinas</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow bg-primary text-white">
            <CardContent className="p-4 text-center">
              <Briefcase className="h-8 w-8 mx-auto mb-2" />
              <h3 className="font-semibold">Estágios</h3>
              <p className="text-xs opacity-90 mt-1">Oportunidades</p>
            </CardContent>
          </Card>

          <Link to="/perfil">
            <Card className="hover:shadow-md transition-shadow bg-primary text-white">
              <CardContent className="p-4 text-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-primary font-medium">L</span>
                </div>
                <h3 className="font-semibold">Meu Perfil</h3>
                <p className="text-xs opacity-90 mt-1">Configurações</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Subjects */}
        <div className="space-y-3">
          {subjects.map((subject, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition-shadow dark:bg-gray-800"
            >
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-gray-800 dark:text-gray-200">
                        {subject.code}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        -
                      </span>
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        {subject.name}
                      </span>
                      <div className="flex items-center gap-1 ml-auto">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">
                          {subject.rating}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>
                        {subject.room} • {subject.time}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {subject.attendance}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Próxima avaliação: {subject.nextEval}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
