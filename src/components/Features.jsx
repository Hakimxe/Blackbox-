function Features() {
  const features = [
    {
      title: "Lightning Fast",
      description: "Optimized performance ensures your applications load instantly and run smoothly.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Fully Responsive",
      description: "Beautiful designs that work perfectly on any device, from mobile to desktop.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Easy to Use",
      description: "Intuitive interface and comprehensive documentation make development a breeze.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Secure by Default",
      description: "Built-in security features protect your data and users from common vulnerabilities.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Customizable",
      description: "Flexible theming system allows you to match your brand perfectly.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "Great Support",
      description: "Dedicated team ready to help you succeed with comprehensive support.",
      gradient: "from-pink-500 to-rose-500"
    }
  ]

  return (
    <section id="features" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Powerful features designed to help you build better applications faster.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} mb-4`}></div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
