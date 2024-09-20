import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { BarChartIcon, BellIcon, LineChartIcon, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center text-main-text-dark">
        <Link className="flex items-center justify-center" href="#">
          <Trophy className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">iTrackStats</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Contact
          </Link>
          <ModeToggle />
        </nav>
      </header>

      <main className="flex-1">
        <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <Image
            src={
              "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="Landing Image"
            width={100000}
            height={100000}
            className="absolute w-full h-full top-0 object-cover"
          />
          <div className="container px-4 md:px-6 z-50">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Stats Deportivas en Tiempo Real a Tu Alcance
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  iTrackStats te ofrece actualizaciones en vivo, análisis
                  completos y estadísticas personalizadas de todos tus deportes
                  favoritos.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-main-text-light dark:text-main-text-light hover:bg-gray-200 p-0">
                  <Link className="h-full w-full p-2" href={"auth/sign-up"}>
                    Comenzar ya
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-primary">
                  Saber más
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-main-workspace-light dark:bg-main-workspace-dark">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-main-text-light dark:text-main-text-dark">
              Características
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4">
                <LineChartIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Actualizaciones en vivo</h3>
                <p className="text-center text-gray-500">
                  Obtén resultados y estadísticas en tiempo real a medida que
                  suceden, en todos los deportes principales.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <BarChartIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Análisis Avanzado</h3>
                <p className="text-center text-gray-500">
                  Profundiza en métricas de rendimiento y datos históricos de
                  equipos y jugadores.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <BellIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Alertas Personalizadas</h3>
                <p className="text-center text-gray-500">
                  Configura notificaciones personalizadas para tus equipos,
                  jugadores y logros favoritos.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-main-workspace-light dark:bg-main-workspace-dark">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Únete a iTrackStats Hoy
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Empieza a seguir tus deportes favoritos y no te pierdas ni un
                  solo momento. ¡Regístrate ahora gratis!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Regístrate</Button>
                </form>
                <p className="text-xs text-gray-500">
                  Al registrarte, aceptas nuestros{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Términos y Condiciones
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-main-text-dark">
          © 2023 iTrackStats. Todos los derechos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-main-text-dark"
            href="#">
            Términos de Servicio
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-main-text-dark"
            href="#">
            PRivacidad
          </Link>
        </nav>
      </footer>
    </div>
  );
}
