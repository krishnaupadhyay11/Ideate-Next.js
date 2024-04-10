import PromptCard from "./PromptCard"

export default function ProfileComp({name, desc, data, handleEdit, handleDelete}) {
  return (
    <section className="w-full">
        <h1 className="text-left font-extrabold text-[36px]">
          <span className="orange_gradient">{`${name}'s Profile`}</span>
        </h1>
        <p className="mt-1 text-left">{desc}</p>

        <div className="mt-10 prompt_layout">
          {data.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
            />
          ))}
        </div>
    </section>
  )
}
