import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
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
        <h1 className="text-xl font-bold">Política de Privacidad</h1>
      </header>

      <main className="px-6 py-8 prose prose-invert max-w-none">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center">
            <Shield size={40} className="text-primary" />
          </div>
        </div>

        <section className="space-y-6 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-foreground text-lg font-bold mb-2">1. Introducción</h2>
            <p>
              En Pideloo (en adelante “nosotros”, “nuestro” o “la empresa”), valoramos y respetamos la privacidad de nuestros usuarios. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos la información personal que nos proporcionas al utilizar nuestro sitio web y nuestros servicios.
            </p>
          </div>

          <div>
            <h2 className="text-foreground text-lg font-bold mb-2">2. Información que recopilamos</h2>
            <p>Podemos recopilar los siguientes tipos de información:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Datos personales:</strong> nombre, apellido, dirección de correo electrónico, número de teléfono y otra información que proporciones voluntariamente.</li>
              <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, dispositivo utilizado, páginas visitadas y tiempo de navegación.</li>
              <li><strong>Cookies:</strong> utilizamos cookies para mejorar tu experiencia y personalizar el contenido. Puedes consultar nuestra <Link to="/cookies" className="text-primary hover:underline">Política de Cookies</Link> para más detalles.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-foreground text-lg font-bold mb-2">3. Finalidad del tratamiento de datos</h2>
            <p>Utilizamos la información recopilada con las siguientes finalidades:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Prestar los servicios solicitados y gestionar tu relación con nosotros.</li>
              <li>Mejorar la experiencia del usuario y optimizar el funcionamiento del sitio.</li>
              <li>Enviar comunicaciones informativas, promocionales o de atención al cliente (si has dado tu consentimiento).</li>
              <li>Cumplir con obligaciones legales y normativas.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-foreground text-lg font-bold mb-2">4. Base legal para el tratamiento</h2>
            <p>El tratamiento de tus datos se realiza en base a:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Tu consentimiento explícito al aceptar esta política o al registrarte en nuestros servicios.</li>
              <li>La necesidad contractual para proporcionarte los servicios solicitados.</li>
              <li>El cumplimiento de obligaciones legales aplicables.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-foreground text-lg font-bold mb-2">5. Compartición de información</h2>
            <p>No compartimos tus datos personales con terceros, salvo en los siguientes casos:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Proveedores de servicios que nos ayudan a operar el sitio (por ejemplo, hosting, analítica o envío de correos electrónicos), bajo acuerdos de confidencialidad.</li>
              <li>Cuando sea requerido por ley o autoridad competente.</li>
              <li>En caso de fusión, adquisición o cambio de control de la empresa, garantizando la protección de tus datos.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-foreground text-lg font-bold mb-2">6. Seguridad de la información</h2>
            <p>
              Implementamos medidas técnicas y organizativas adecuadas para proteger tus datos personales contra acceso no autorizado, pérdida o alteración. Sin embargo, debes tener en cuenta que ningún sistema de transmisión o almacenamiento es completamente seguro.
            </p>
          </div>

          <div>
            <h2 className="text-foreground text-lg font-bold mb-2">7. Conservación de datos</h2>
            <p>
              Conservamos tus datos personales durante el tiempo necesario para cumplir con las finalidades descritas en esta política, salvo que la ley requiera un período mayor de conservación.
            </p>
          </div>

          <div>
            <h2 className="text-foreground text-lg font-bold mb-2">8. Derechos del usuario</h2>
            <p>Tienes derecho a:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Acceder a tus datos personales.</li>
              <li>Solicitar su rectificación o eliminación.</li>
              <li>Oponerte o limitar su tratamiento.</li>
              <li>Retirar tu consentimiento en cualquier momento.</li>
            </ul>
            <p className="mt-2">
              Para ejercer estos derechos, puedes escribirnos a <a href="mailto:jesus@jodaz.xyz" className="text-primary hover:underline">jesus@jodaz.xyz</a>.
            </p>
          </div>

          <div>
            <h2 className="text-foreground text-lg font-bold mb-2">9. Enlaces a sitios de terceros</h2>
            <p>
              Nuestro sitio puede contener enlaces a otras páginas web. No somos responsables del contenido ni de las políticas de privacidad de dichos sitios externos. Te recomendamos leer sus propias políticas antes de proporcionar información personal.
            </p>
          </div>

          <div>
            <h2 className="text-foreground text-lg font-bold mb-2">10. Cambios en esta política</h2>
            <p>
              Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio será publicado en esta misma página, con la fecha de actualización correspondiente.
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

export default Privacy;
