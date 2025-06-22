import ContextProvider from "@components/Context";
import Nav from "@components/Nav";
import Feed from "@components/Feed";

function Home() {
  return (
    <ContextProvider >
      <div className="px-4 md:px-12 w-full">
        <Nav />
    
      <section className='w-full flex-col flex-center'>
        <h1 className='head_text text-center'>
          Articulate and Share
        </h1>
        
        <h1 className='head_text orange_gradient text-center mt-4 md:mt-8'>
          Ideas that Inspire You
        </h1>
        
        <p className='desc text-center'>
          Ideate your thoughts, plans, and goals with the help of AI.<br /> And share them with your community to collaborate.
        </p>
      </section>
      
      <Feed />
      </div>
      
    </ContextProvider>
  )
}

export default Home;