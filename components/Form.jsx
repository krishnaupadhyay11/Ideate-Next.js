import Link from 'next/link'

export default function Form({type, post, setPost, submitting, handleSubmit}) {
  function keyCheck(e){
    if (e.key == ' ' || e.key == ',' || e.key == '#'){
      e.preventDefault();
    }
  }

  return (
    <section className="w-full max-w-full flex-col flex-start">
      <h1 className="head_text text-left">{type} Post</h1>

      <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea value={post.prompt} onChange={(e) => setPost({ ...post, prompt: e.target.value })} placeholder="Write your prompt here" className="form_textarea" required resize="none" />
        </label>
        
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag {' '}
            <span>(#product, #webdevelopment, #coding)</span>
          </span>
          <input value={post.tag} onKeyDown={keyCheck}  onChange={(e) => setPost({ ...post, tag: e.target.value })} placeholder="Write your tag here" className="form_input" required resize="none" />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4"> 
          <Link href="/" className="text-gary-500 text-sm">
            Cancel
          </Link>

          <button type='submit' disabled={submitting} className='px-5 py-2 text-sm bg-orange-500 rounded-full text-white'>
            {submitting ? `${type.slice(0,-1)}ing` : type}
          </button>
        </div>

      </form>
    </section>
    
  )
}