import React, { useState, useEffect } from 'react';
import { Heart, Phone, Mail, MapPin, Clock, Star, ArrowRight, MessageCircle, User, Calendar, ChevronDown, Instagram, Facebook, Linkedin } from 'lucide-react';
import perfilImg from './assets/perfil.jpeg';
import capaImg from './assets/capa.png';
import { motion } from 'framer-motion';

const EunicePaivaLanding = () => {
  const [activeStory, setActiveStory] = useState<null | typeof stories[0]>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formSuccess, setFormSuccess] = useState(false);
  const [revealedText, setRevealedText] = useState('');
  const fullText = 'Eu estou aqui para te ouvir.';
  useEffect(() => {
    setRevealedText('');
    let i = 0;
    const interval = setInterval(() => {
      setRevealedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 60); // era 35
    return () => clearInterval(interval);
  }, []);

  const stories = [
    {
      id: 1,
      title: "A mulher que redescobriu a alegria de viver",
      preview: "Uma mãe enlutada que dedicou toda sua vida ao cuidado do unico filho, esquecendo-se de si mesma. Nascida em 23 de dezembro, nunca celebrou sua vida até entender que merecia celebra-la",
      full: "Essa mãe já havia perdido dois filhos antes mesmo de conhecê-los. O único que sobreviveu, quase se foi aos 6 anos, após um afogamento. Desde então, sua vida parou. Dedicou-se exclusivamente ao cuidado dele, abrindo mão dos próprios sonhos, desejos e até de celebrar o próprio aniversário. Nascida em 23 de dezembro, cresceu ouvindo: 'Pra que fazer bolo hoje, se amanhã já é Natal?'. Aos poucos, aprendeu a se calar, a se anular, a acreditar que sua existência era secundária.",
      outcome: "Pela primeira vez em muitos anos, ela celebrou a própria vida. 'Foi a primeira vez que me senti viva de novo. Foi leve, foi bom. Eu também mereço comemorar.'"
    },
    {
      id: 2,
      title: "Quando o perdão cura uma dor profunda",
      preview: "Uma jovem mãe perdeu sua filha recém-nascida. Logo depois, sua cunhada deu o mesmo nome à filha, em um ato de insensibilidade. A dor virou contenda e ruptura familiar...",
      full: "A perda de sua bebê foi devastadora. Pouco depois, sua cunhada teve uma filha e, apesar dos avisos, escolheu exatamente o mesmo nome da menina falecida. O gesto foi recebido como afronta, abrindo uma ferida ainda maior. O que antes era uma família unida, se transformou em mágoas, distanciamento e anos de silêncio e brigas. Até que ela buscou ajuda terapêutica e o 'Nunca vou conseguir perdoar' floresceu em perdão e reconciliação.",
      outcome: "Ela organizou um almoço em família — o primeiro depois de anos. E mesmo sem precisar, ela escolheu dar o primeiro passo: pediu perdão à cunhada. Aquela família que estava quebrada foi restaurada naquele dia."
    },
    {
      id: 3,
      title: "Quando o medo de mudanças paralisa a vida",
      preview: "Rejeitada na infância, ela encontrou no casamento uma saída. Mas o trauma ainda estava lá, um medo profundo de ser deixada para trás, impedindo-a de viver plenamente...",
      full: "Desde muito pequena, foi marcada pela ausência dos pais. A mãe a entregou para ser criada pela avó. Aos 9 anos, foi enviada de volta para a casa da mãe, onde enfrentou uma realidade dura. Mas, mesmo adulta, o medo de mudanças e o trauma da rejeição a impediam de viver. Sempre que o marido propunha uma viagem em família, ela se sabotava.'Se eu for, vou ser abandonada de novo.'",
      outcome: "Ela entendeu que, por trás das desculpas, havia uma criança ferida — e que a mudança podia ser o caminho para uma vida mais leve e feliz. 'Agora eu arrumo a mala sem medo. Sei que não estou fugindo, estou criando memórias, estou vivendo.'"
    }
  ];
  

  const testimonials = [
    {
      name: "Maria, 34 anos",
      text: "Foram anos tentando, mas foi através da terapia com a Eunice que eu finalmente consegui abrir meu coração. Ela me ajudou a perdoar, a me libertar."
    },
    {
      name: "Ana, 42 anos",
      text: "Eunice me ensinou que toda vez que eu arrumava a mala, sentia que estava indo embora de novo. Hoje consigo viajar em paz com minha família."
    },
    {
      name: "Carla, 38 anos",
      text: "Foi a primeira vez que me senti viva de novo. Foi leve, foi bom. Eu também mereço comemorar minha própria vida."
    }
  ];

  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);
  const [storyTouchStartX, setStoryTouchStartX] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsApp = (useName = true) => {
    let message;
    if (useName && formData.name.trim()) {
      message = `Olá Eunice! Me chamo ${formData.name}. ${formData.message || 'Gostaria de agendar uma conversa inicial.'}`;
    } else {
      message = `Olá Eunice! Gostaria de agendar uma conversa inicial.`;
    }
    const whatsappUrl = `https://wa.me/5581998791949?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setFormSuccess(true);
    setTimeout(() => setFormSuccess(false), 3000);
  };

  // Adicionar handlers de swipe para o carousel mobile
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  return (
    <div>
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative bg-gradient-to-r from-purple-100 via-pink-50 to-purple-100 py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6 leading-tight">
                Você carrega muito amor, mas também
                <span className="text-purple-600 block">muitas dores.</span>
              </h1>
              <p className="text-xl mb-4 min-h-[2.5rem]">
                <span className="whitespace-pre italic text-gray-600 animate-pulse-slow">{revealedText}</span>
              </p>
              <p className="text-lg text-gray-700 mb-8">
                <strong>Eunice Paiva, Psicanalista</strong><br/>
                Atendimento online voltado para mulheres que desejam ser ouvidas e buscam ser curadas de verdade
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => {
                    const el = document.getElementById('contato');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 active:animate-pulse relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white opacity-0 active:opacity-10 transition-opacity duration-300 rounded-full pointer-events-none" />
                  
                  Quero conversar com Eunice
                </button>
                <button 
                  onClick={() => {
                    const el = document.getElementById('historias');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  
                  Ver histórias reais de superação
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-2">
                <img 
                    src={capaImg} 
                  alt="Mulher em contemplação pelo caminho" 
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-200 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Storytelling Section */}
      <motion.section
        id="historias"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center text-gray-800 mb-4">
            Histórias que nos curam
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Cada mulher tem uma história única. Aqui estão algumas jornadas de transformação que acompanhei com carinho e dedicação.
          </p>
          {/* Carousel para mobile */}
          <div className="block md:hidden">
            <div
              className="relative"
              onTouchStart={e => setStoryTouchStartX(e.touches[0].clientX)}
              onTouchEnd={e => {
                if (storyTouchStartX === null) return;
                const diff = e.changedTouches[0].clientX - storyTouchStartX;
                if (diff > 40) setStoryIndex((storyIndex - 1 + stories.length) % stories.length);
                if (diff < -40) setStoryIndex((storyIndex + 1) % stories.length);
                setStoryTouchStartX(null);
              }}
            >
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500"
                  style={{ transform: `translateX(-${storyIndex * 100}%)` }}
                >
                  {stories.map((story, i) => (
                    <div key={story.id} className="w-full flex-shrink-0">
                      <div className="relative bg-gradient-to-b from-purple-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                          {story.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {story.preview}
                        </p>
                        <button 
                          onClick={() => setActiveStory(story)}
                          className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2 transition-colors"
                        >
                          Veja como ela transformou sua história
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {stories.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === storyIndex ? 'bg-purple-600' : 'bg-purple-200'}`}
                  onClick={() => setStoryIndex(i)}
                  aria-label={`Ver história ${i + 1}`}
                />
              ))}
            </div>
          </div>
          {/* Grid para md+ */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {stories.map((story, i) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
                className="relative bg-gradient-to-b from-purple-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {story.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {story.preview}
                </p>
                <button 
                  onClick={() => setActiveStory(story)}
                  className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2 transition-colors"
                >
                  Veja como ela transformou sua história
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Modal for Stories */}
      {activeStory && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setActiveStory(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl max-h-[80vh] overflow-y-auto p-8"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-2xl font-serif text-gray-800 mb-4">
              {activeStory.title}
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {activeStory.full}
            </p>
            <div className="bg-purple-50 p-6 rounded-xl mb-6">
              <h4 className="font-semibold text-purple-800 mb-2">Resultado:</h4>
              <p className="text-purple-700 italic">
                "{activeStory.outcome}"
              </p>
            </div>
            <button 
              onClick={() => setActiveStory(null)}
              className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center text-gray-800 mb-16">
            O que dizem mulheres que confiaram em mim
          </h2>
          {/* Carousel para mobile */}
          <div className="block md:hidden">
            <div
              className="relative"
              onTouchStart={e => setTouchStartX(e.touches[0].clientX)}
              onTouchEnd={e => {
                if (touchStartX === null) return;
                const diff = e.changedTouches[0].clientX - touchStartX;
                if (diff > 40) setTestimonialIndex((testimonialIndex - 1 + testimonials.length) % testimonials.length);
                if (diff < -40) setTestimonialIndex((testimonialIndex + 1) % testimonials.length);
                setTouchStartX(null);
              }}
            >
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500"
                  style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial, i) => (
                    <div key={i} className="w-full flex-shrink-0">
                      <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-700 italic mb-6 leading-relaxed">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-purple-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">{testimonial.name}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === testimonialIndex ? 'bg-purple-600' : 'bg-purple-200'}`}
                  onClick={() => setTestimonialIndex(i)}
                  aria-label={`Ver depoimento ${i + 1}`}
                />
              ))}
            </div>
          </div>
          {/* Grid para md+ */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-2 max-w-md mx-auto">
                  <img 
                    src={perfilImg} 
                    alt="Eunice Paiva - Psicanalista" 
                    className="w-full h-auto rounded-xl object-cover"
                  />
                </div>
                </div>
            </div>
            <div>
              <h2 className="text-4xl font-serif text-gray-800 mb-6">
                Sobre Eunice Paiva
              </h2>
              <div className="bg-purple-50 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-purple-600" />
                  <span className="text-purple-800 font-semibold">formada em psicanálise</span>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Sou psicanalista com larga experiência ouvindo histórias e ajudando a curar feridas da alma. 
                Especialista em traumas femininos, luto, identidade, bloqueios emocionais e recomeços.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Acredito que toda mulher tem dentro de si um grito silencioso que precisa ser acolhido. 
                Minha abordagem une a psicanálise à fé cristã, oferecendo um espaço seguro 
                para você se reconectar consigo mesma.
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Especialidades:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Traumas de rejeição infantil</li>
                  <li>• Luto e perdas gestacionais</li>
                  <li>• Bloqueios emocionais e auto-sabotagem</li>
                  <li>• Resgate da autoestima feminina</li>
                  <li>• Relacionamentos e dinâmicas familiares</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* How it Works */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-gray-800 mb-6">
            Cuidar de você pode ser mais simples do que parece
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            Um processo acolhedor e respeitoso, no seu ritmo
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                1. Conversa inicial
              </h3>
              <p className="text-gray-600">
                Marque suas duas primeiras conversas sem compromisso. É um momento para nos conhecermos e você entender como posso te ajudar.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                2. Escolha seu horário
              </h3>
              <p className="text-gray-600">
                Atendimento online e acessível, conforme sua preferência e comodidade. O importante é você se sentir acolhida.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                3. Jornada de cura
              </h3>
              <p className="text-gray-600">
                Caminhamos juntas com leveza e constância, respeitando seu tempo e suas necessidades únicas.
              </p>
            </div>
          </div>
          
          <button 
            onClick={() => {
              const el = document.getElementById('contato');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-purple-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg mt-12 flex items-center gap-2 mx-auto"
          >
            <Calendar size={20} />
            Quero começar agora
          </button>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-center text-gray-800 mb-16">
            Perguntas frequentes
          </h2>
            <FAQAccordion />
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        id="contato"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="py-20 px-4 bg-gradient-to-r from-purple-100 to-pink-100"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-gray-800 mb-6">
            Sua história merece ser contada sem julgamentos
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Vamos conversar?
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            {formSuccess && (
              <div className="text-green-600 font-semibold mb-4 animate-fade-in-up">Mensagem enviada com sucesso!</div>
            )}
            <div className="grid gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Digite seu nome completo"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Conte brevemente o que está sentindo, ou como posso te ajudar..."
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                ></textarea>
              </div>
              
              <button 
                onClick={() => handleWhatsApp(true)}
                className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 w-full"
              >
                <MessageCircle size={20} />
                Agendar conversa no WhatsApp
              </button>
            </div>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-1 text-gray-600">
              <MapPin size={20} className="text-purple-600" />
              <span>Atendimento Online</span>
            </div>
            <div className="flex items-center justify-center gap-1 text-gray-600">
              <Clock size={20} className="text-purple-600" />
              <span>Horários flexíveis</span>
            </div>
            <div className="flex items-center justify-center gap-1 text-gray-600">
              <Heart size={20} className="text-purple-600" />
              <span>Conversa inicial livre</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="border-t border-gray-700 mb-8"></div>
          <h3 className="text-2xl font-serif mb-4">Eunice Paiva Psicanalista</h3>
          <p className="text-gray-300 mb-6">Cura Emocional e Recomeços | Eunice Paiva Psicanalista</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-8 items-center">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>(81) 99879-1949</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>eunicemesquita@hotmail.com</span>
            </div>
          </div>
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors transform hover:scale-110"><Instagram size={24} /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors transform hover:scale-110"><Facebook size={24} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors transform hover:scale-110"><Linkedin size={24} /></a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Eunice Paiva. Todos os direitos reservados. • CRP XX/XXXXX
          </p>
        </div>
      </footer>
      </div>
      {/* Adicionar botão flutuante do WhatsApp no final do return principal */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => handleWhatsApp(false)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400"
          aria-label="Agendar conversa no WhatsApp"
        >
          <MessageCircle size={32} />
        </button>
      </div>
    </div>
  );
};

const faqList = [
  {
    q: "Psicanálise funciona mesmo?",
    a: "Sim! A psicanálise é uma abordagem profunda que ajuda você a compreender os padrões inconscientes que influenciam sua vida. Minha experiência mostra resultados transformadores quando há dedicação e confiança no processo."
  },
  {
    q: "Qual a diferença entre psicanálise e psicologia?",
    a: "A psicanálise trabalha com o inconsciente, buscando as raízes profundas dos conflitos emocionais. É um processo de autoconhecimento que vai além dos sintomas, promovendo mudanças duradouras na sua forma de se relacionar consigo mesma e com o mundo."
  },
  {
    q: "Como saber se preciso de ajuda?",
    a: "Se você sente que carrega dores não resolvidas, tem dificuldades em relacionamentos, se sabota constantemente, ou simplesmente sente que há mais em você do que consegue expressar, a psicanálise pode ser transformadora."
  },
  {
    q: "Posso fazer terapia mesmo sem um trauma específico?",
    a: "Claro! A psicanálise não é apenas para traumas evidentes. É para qualquer mulher que deseja se conhecer melhor, desenvolver sua autenticidade e viver com mais leveza e propósito."
  }
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqList.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className={`bg-purple-50 rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${isOpen ? 'border-2 border-purple-400 shadow-2xl bg-purple-100' : ''}`}>
            <button
              className={`w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none transition-colors group ${isOpen ? 'text-purple-700' : 'text-gray-800'}`}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <span className={`font-semibold text-lg transition-colors duration-300 ${isOpen ? 'text-purple-700' : 'text-gray-800'}`}>{faq.q}</span>
              <ChevronDown
                className={`w-6 h-6 text-purple-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180 animate-bounce' : ''}`}
                aria-hidden="true"
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out px-6 ${isOpen ? 'max-h-96 py-2 opacity-100' : 'max-h-0 py-0 opacity-0'} text-gray-700`}
              style={{overflow: 'hidden'}}
            >
              <div className="leading-relaxed">
                {faq.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default EunicePaivaLanding;