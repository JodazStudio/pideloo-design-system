import { ArrowLeft, Cookie } from "lucide-react";
import { Link } from "react-router-dom";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background pb-12">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg px-4 py-4 safe-top flex items-center gap-4">
        <Link
          to="/settings"
          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-transform hover:scale-105"
        >
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-xl font-bold">Política de Cookies</h1>
      </header>

      <main className="px-6 py-8 prose prose-invert max-w-none">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center">
            <Cookie size={40} className="text-primary" />
          </div>
        </div>

        <section className="space-y-6 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-foreground text-lg font-bold mb-2">1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web guardan en tu dispositivo para almacenar información sobre tu visita. Su finalidad principal es mejorar la experiencia del usuario, permitir ciertas funcionalidades y analizar el uso del sitio.
            </p>
          </div>

          <div>
            <h2 className="text-foreground text-lg font-bold mb-2">2. Tipos de cookies que utilizamos</h2>
            <p>En nuestro sitio usamos cookies propias y de terceros con diferentes finalidades:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Cookies necesarias:</strong> son esenciales para el funcionamiento del sitio web y no requieren consentimiento.</li>
              <li><strong>Cookies de preferencias:</strong> recuerdan tus elecciones (como idioma o región).</li>
              <li><strong>Cookies estadísticas:</strong> ayudan a entender cómo interactúan los visitantes con la web recopilando y reportando información de forma anónima.</li>
              <li><strong>Cookies de marketing:</strong> se utilizan para rastrear a los visitantes en los sitios web con el fin de mostrar anuncios relevantes.</li>
            </ul>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse border border-border/50">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="p-2 border border-border/50">Nombre</th>
                    <th className="p-2 border border-border/50">Proveedor</th>
                    <th className="p-2 border border-border/50">Finalidad</th>
                    <th className="p-2 border border-border/50">Duración</th>
                    <th className="p-2 border border-border/50">Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border border-border/50">session_id</td>
                    <td className="p-2 border border-border/50">Pideloo</td>
                    <td className="p-2 border border-border/50">Identifica la sesión del usuario</td>
                    <td className="p-2 border border-border/50">Sesión</td>
                    <td className="p-2 border border-border/50">Necesaria</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-border/50">_ga</td>
                    <td className="p-2 border border-border/50">Google Analytics</td>
                    <td className="p-2 border border-border/50">Distinguir usuarios y medir estadísticas</td>
                    <td className="p-2 border border-border/50">2 años</td>
                    <td className="p-2 border border-border/50">Estadística</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-border/50">_gid</td>
                    <td className="p-2 border border-border/50">Google Analytics</td>
                    <td className="p-2 border border-border/50">Analítica del comportamiento de usuario</td>
                    <td className="p-2 border border-border/50">24 horas</td>
                    <td className="p-2 border border-border/50">Estadística</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-foreground text-lg font-bold mb-2">3. ¿Cómo puedes controlar las cookies?</h2>
            <p>
              Puedes aceptar o rechazar las cookies no esenciales desde el banner de consentimiento o modificar tus preferencias en cualquier momento. También puedes eliminar o bloquear las cookies desde la configuración de tu navegador.
            </p>
          </div>

          <div>
            <h2 className="text-foreground text-lg font-bold mb-2">4. Cookies de terceros</h2>
            <p>
              Algunos servicios externos que utilizamos (como Google Analytics, Meta Ads, o YouTube) pueden instalar cookies propias. Te recomendamos revisar las políticas de cookies de estos proveedores para conocer más sobre cómo tratan tus datos.
            </p>
          </div>

          <div>
            <h2 className="text-foreground text-lg font-bold mb-2">5. Actualización de la política</h2>
            <p>
              Nos reservamos el derecho a modificar la presente política para adaptarla a novedades legislativas o técnicas. La fecha de la última actualización siempre se mostrará al inicio del documento.
            </p>
          </div>

          <div className="pt-6 border-t border-border/50">
            <p className="font-bold underline text-foreground">Contacto:</p>
            <p>
              Si tienes preguntas sobre esta política o el manejo de tus datos, contáctanos en{" "}
              <a href="mailto:jesus@jodaz.xyz" className="text-primary hover:underline font-medium">
                jesus@jodaz.xyz
              </a>.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cookies;
