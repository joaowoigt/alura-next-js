import Link from'../src/components/Link'
import PageTitle from '../src/components/PageTitle';
import FAQScreen from '../src/components/screens/FAQScreen';

// SSG - Static Site Generation
// SSR - Server Side Rendering
// ISG - Incremental Static Generation


// export async function getServerSideProps() {
// Roda em cada acesso que vc receber
// Em modo dev sempre roda em cada acesso

export default FAQScreen;

export async function getStaticProps() {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    const faq = await fetch(FAQ_API_URL)
        .then((response) => {
            return response.json();
        })
        .then((mappedResponse) => {
            console.log(mappedResponse)
            return mappedResponse;
        })
    return {
        props: {
            qualquercoisa: 'que eu passar aqui',
            faq,
        },
    };
}

/* export default function FAQPage({faq}) {
    console.log(faq);

    return (
        <div>
            <PageTitle>
                FAQ - Alura Cases Campanha
            </PageTitle>
            <h1>Pagina de Perguntas Frequentes</h1>
            <Link href="/">
                Ir para a HomePage
            </Link>
            <ul>
                {faq.map(({ answer, question }) => (
                    <li key={question} >
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>
                ))}

            </ul>
        </div>
    )
} */