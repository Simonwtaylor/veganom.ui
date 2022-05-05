import Head from "next/head";
import { useRouter } from "next/router";
import { RECIPES_MOCK } from "../data/recipes.data";
import { RecipeCard, FlexRowContainer, StyledHeader, PageContainer } from "../src/components";
import { RecipeSearch } from "../src/components/search";
import { SearchContainer } from "../src/components/search/search.styles";
import { IRecipe, RouterEnums } from "../src/lib";

interface IHomePageProps {
  data: {
    footer: string;
    recipes: IRecipe[];
  };
}

const Home: React.FC<IHomePageProps> = ({ data }) => {
  const router = useRouter();

  const handleCardClick = (id: number) => {
    router.push(RouterEnums.RECIPE.replace('{id}', id.toString()));
  };

  const handleSearchChange = (search: string) => {
    console.log(search);
  };

  return (
    <div>
      <Head>
        <title>🥦 Veganom</title>
      </Head>
      <main>
        <PageContainer>
          <SearchContainer>
            <RecipeSearch onSearchType={handleSearchChange} />
          </SearchContainer>
          <FlexRowContainer>
            {(data.recipes && data.recipes.map((recipe, index) => (
              <RecipeCard
                {...recipe}
                onCardClick={handleCardClick}
                key={`recipecard${index}`}
              />
            )))}
          </FlexRowContainer>
        </PageContainer>
      </main>
      <footer
        className={"footer"}
      >
      </footer>
    </div>
  );
};

export default Home;

export async function getStaticProps(context: any) {
  return {
    props: {
      data: {
        recipes: RECIPES_MOCK,
        footer: "xyz",
      },
    },
  };
}
