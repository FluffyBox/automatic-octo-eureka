import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <h1 className="text-3xl font-semibold text-primary sm:text-4xl">
        Pagina căutată nu a fost găsită
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        Este posibil ca pagina să fi fost mutată sau adresa să fi fost introdusă greșit.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/" variant="primary">
          Înapoi la pagina principală
        </Button>
        <Button href="/oferta" variant="outline">
          Solicită o ofertă
        </Button>
      </div>
    </Container>
  );
}
