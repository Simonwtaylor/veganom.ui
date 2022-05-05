import Head from 'next/head';
import { RECIPES_MOCK } from '../../data/recipes.data';
import { PageContainer } from '../../src/components';
import { IRecipe } from '../../src/lib';

interface IRecipePageProps {
  recipe: IRecipe;
}

const Recipe: React.FC<IRecipePageProps> = ({
  recipe,
}) => {
  const { title, icon } = recipe;

  return (
    <div>
      <Head>
        <title>Veganom - {title} 🥦</title>
      </Head>
      <main>
        <PageContainer>
          <h1>
            {icon} {title}
          </h1>
        </PageContainer>
      </main>
      <footer className={'footer'}>
      </footer>
    </div>
  )
};

export default Recipe;

export async function getServerSideProps(context: any) {
  return {
    props: {
      recipe: (context.query.id) ? RECIPES_MOCK.find(a => a.id === +context.query.id) : {},
    },
  };
}
