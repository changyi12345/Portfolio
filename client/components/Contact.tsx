export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <p className="text-lg mb-4">Feel free to reach out!</p>
        <a 
          href="mailto:contact@example.com" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}
