import Card from "./card"

const ServicesSection = () => (
    <div className="min-h-screen dark:bg-white flex justify-center items-center">
        <div className="sm:w-4/5 lg:w-3/5 flex gap-16">
            <div className="sm:w-1/2">
                <span className="sm:text-6xl dark:text-black font-black tracking-tighter sm:leading-tight">
                    Sky rocket your business with a website as excellent as yourself.
                </span>
            </div>
            <div className="sm:w-1/2">
                <div>
                    <Card title="Hybrid Apps">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus nisi, sollicitudin nec est ac, sollicitudin ornare urna. Etiam euismod finibus lectus, at ullamcorper dui.
                    </Card>
                </div>
                <div>
                    <Card title="SEO">
                        Sed gravida turpis venenatis venenatis sollicitudin. Curabitur lacus purus, laoreet nec venenatis sit amet, fermentum at arcu. Proin scelerisque metus purus, hendrerit blandit diam pretium ut. Morbi a est sit amet ipsum finibus sagittis. Fusce consequat enim vel facilisis mattis. Etiam id sapien mauris.
                    </Card>
                </div>
            </div>
        </div>
    </div>
)

export default ServicesSection