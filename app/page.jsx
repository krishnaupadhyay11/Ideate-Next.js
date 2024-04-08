import Feed from "@components/Feed";
import { connectToDB } from "@utils/database";

function Home() {
  return (
    <section className='w-full flex-col flex-center'>
      <h1 className='head_text text-center'>
        Discover & Share
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'>
          AI Powered Prompts
        </span>
      </h1>
      <p className='desc text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vero odit praesentium accusantium itaque, ipsum labore, incidunt, atque sint et quisquam!
      </p>

      <Feed />
    </section>
  )
}

export default Home;