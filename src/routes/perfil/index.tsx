import { createFileRoute } from "@tanstack/react-router";
import {
  Calendar,
  Edit,
  Eye,
  GraduationCap,
  Heart,
  LogOut,
  Mail,
  MapPin,
  Settings,
  Trophy,
  User,
  Users,
} from "lucide-react";
import { TopBar } from "../../components/top-bar";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export const Route = createFileRoute("/perfil/")({
  component: RouteComponent,
});

function RouteComponent() {
  const userStats = {
    vagasCurtidas: 12,
    vagasAplicadas: 5,
    entrevistasRealizadas: 2,
  };

  const preferences = [
    { area: "Desenvolvimento Web", level: "Remoto" },
    { area: "Data Science", level: "Bolsa acima de R$ 1.000" },
  ];

  const history = [
    {
      company: "TechWave",
      position: "Dev Web",
      status: "Entrevista agendada",
      date: "28/05",
    },
    {
      company: "InnovaTech",
      position: "Eng. Software",
      status: "Aguardando",
      date: "25/05",
    },
    {
      company: "DataMinds",
      position: "Data Science",
      status: "Não selecionado",
      date: "20/05",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <TopBar
        title="Meu Perfil"
        showBackButton={true}
        rightElement={
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-blue-700 dark:hover:bg-blue-900"
          >
            <Settings className="h-6 w-6" />
          </Button>
        }
      />

      <div className="p-4 space-y-6 pb-20">
        {/* Profile Header */}
        <Card className="dark:bg-gray-800">
          <CardContent className="p-6 text-center">
            <Avatar className="w-24 h-24 mx-auto mb-4">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-200 text-2xl">
                LT
              </AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
              Lucas Teles de Souza
            </h2>
            <p className="text-blue-600 dark:text-blue-400 mb-2">
              Engenharia de Software
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <MapPin className="h-4 w-4" />
              <span>Santa Rita do Sapucaí, MG</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="dark:border-gray-700 dark:text-gray-300"
            >
              <Edit className="h-4 w-4 mr-2" />
              Editar Perfil
            </Button>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="text-center dark:bg-gray-800">
            <CardContent className="p-4">
              <Heart className="h-6 w-6 text-pink-500 dark:text-pink-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                {userStats.vagasCurtidas}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                vagas curtidas
              </p>
            </CardContent>
          </Card>

          <Card className="text-center dark:bg-gray-800">
            <CardContent className="p-4">
              <Eye className="h-6 w-6 text-blue-500 dark:text-blue-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                {userStats.vagasAplicadas}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                vagas aplicadas
              </p>
            </CardContent>
          </Card>

          <Card className="text-center dark:bg-gray-800">
            <CardContent className="p-4">
              <Users className="h-6 w-6 text-green-500 dark:text-green-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                {userStats.entrevistasRealizadas}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                entrevistas marcadas
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Preferences */}
        <Card className="dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Preferências de vaga
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {preferences.map((pref, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="font-medium dark:text-gray-200">
                  {pref.area}
                </span>
                <Badge variant="secondary">{pref.level}</Badge>
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="w-full mt-3 dark:border-gray-700 dark:text-gray-300"
            >
              <Edit className="h-4 w-4 mr-2" />
              Editar Preferências
            </Button>
          </CardContent>
        </Card>

        {/* Application History */}
        <Card className="dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Histórico
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {history.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="flex-1">
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    {item.company}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.position}
                  </p>
                </div>
                <div className="text-right">
                  <Badge
                    variant={
                      item.status === "Entrevista agendada"
                        ? "default"
                        : item.status === "Aguardando"
                          ? "secondary"
                          : "destructive"
                    }
                    className="mb-1"
                  >
                    {item.status}
                  </Badge>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="w-full dark:border-gray-700 dark:text-gray-300"
            >
              Ver todo
            </Button>
          </CardContent>
        </Card>

        {/* Settings */}
        <Card className="dark:bg-gray-800">
          <CardContent className="p-4 space-y-3">
            <Button
              variant="ghost"
              className="w-full justify-start h-12 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <User className="h-5 w-5 mr-3" />
              Informações Pessoais
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start h-12 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <GraduationCap className="h-5 w-5 mr-3" />
              Dados Acadêmicos
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start h-12 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <Mail className="h-5 w-5 mr-3" />
              Notificações
            </Button>

            <Separator className="dark:bg-gray-700" />

            <Button
              variant="ghost"
              className="w-full justify-start h-12 text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/20"
            >
              <LogOut className="h-5 w-5 mr-3" />
              Sair da Conta
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
