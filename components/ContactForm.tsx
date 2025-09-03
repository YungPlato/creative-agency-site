import Reveal from './Reveal';

export default function ContactForm() {
  return (
    <section id="contact" className="container mx-auto px-6 py-16 scroll-mt-28">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-center text-gray-400 mb-8">Have a question or want to work together? Drop us a line.</p>
      </Reveal>
      <Reveal>
        <div className="max-w-2xl mx-auto">
          <div className="glass rounded-2xl p-8">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-brandPink" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-brandPink" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-brandPink"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="px-6 py-2 rounded-md bg-brandPink text-black font-semibold hover:bg-brandCyan transition-all">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
