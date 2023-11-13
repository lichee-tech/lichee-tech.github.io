const Card = ({ title, children }: { title: string, children: any }) => (
    <div className="p-4">
        <div className="dark:text-black font-black sm:text-2xl mb-4 tracking-tighter">
            { title }
        </div>
        <div className="dark:text-faded-black">
            { children }
        </div>
    </div>
)

export default Card;