import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import logo from "../assets/logo-inatel.svg";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    setIsLoading(true);
    // Simular login
    setTimeout(() => {
      router.navigate({ to: "/dashboard" });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl border-0">
        <CardHeader className="text-center space-y-6 pb-8">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
              <img
                src={logo}
                alt="Inatel"
                width={60}
                height={60}
                className="filter brightness-0 invert"
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Bem-vindo ao Inatel
            </h1>
            <p className="text-gray-600 mt-2">
              Acesse sua conta para descobrir vagas e oportunidades
              personalizadas
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 p-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Curso</label>
              <Select>
                <div className="border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                  <SelectTrigger className="px-3 py-2 text-sm">
                    <SelectValue placeholder="Selecione seu curso" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[200px] overflow-y-auto bg-white border border-gray-300 rounded-md shadow-sm">
                    <SelectItem
                      value="engenharia-de-software"
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      Engenharia de Software
                    </SelectItem>
                    <SelectItem
                      value="engenharia-de-computacao"
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      Engenharia de Computação
                    </SelectItem>
                    <SelectItem
                      value="telecom"
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      Engenharia de Telecomunicações
                    </SelectItem>
                    <SelectItem
                      value="eletrica"
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      Engenharia Elétrica
                    </SelectItem>
                    <SelectItem
                      value="producao"
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      Engenharia de Produção
                    </SelectItem>
                    <SelectItem
                      value="biomedica"
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      Engenharia Biomédica
                    </SelectItem>
                  </SelectContent>
                </div>
              </Select>
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-2 block">
                Matrícula
              </label>
              <Input placeholder="Digite sua matrícula" className="h-10" />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-2 block">Senha</label>
              <Input
                type="password"
                placeholder="Digite sua senha"
                className="h-10"
              />
            </div>
          </div>

          <Button
            onClick={handleLogin}
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium"
            disabled={isLoading}
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </Button>

          <div className="text-center">
            <Link to="/" className="text-blue-600 text-sm hover:underline">
              Esqueceu a senha?
            </Link>
          </div>

          <Separator />

          <div className="text-center text-xs text-gray-500">
            Inatel App v2.0 - Desenvolvido por Teles
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
