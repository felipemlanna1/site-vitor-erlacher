import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import {
  WhatsappLogo, Phone, MapPin, Star, Certificate, Sparkle,
  Syringe, UserCircle, ArrowRight, List, X, Clock,
  InstagramLogo, ShieldCheck, GraduationCap, Users,
  Heart,
} from '@phosphor-icons/react'

const WHATSAPP = '554840093300'
const PHONE_NUM = '(48) 4009-3300'
const ADDRESS = 'Av. Prefeito Osmar Cunha, 416 - Sala 503, Centro, Florian\u00f3polis - SC'

const wa = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

const NAV = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#procedimentos', label: 'Procedimentos' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

const PROCEDURES = [
  { icon: <Syringe size={32} weight="duotone" />, title: 'Preenchimento Facial', desc: '\u00c1cido hialur\u00f4nico para volume, contorno e rejuvenescimento com naturalidade.' },
  { icon: <Sparkle size={32} weight="duotone" />, title: 'Toxina Botul\u00ednica', desc: 'Suaviza\u00e7\u00e3o de linhas de express\u00e3o com t\u00e9cnica precisa e resultado harmonioso.' },
  { icon: <Heart size={32} weight="duotone" />, title: 'Lip Filler', desc: 'Volumiza\u00e7\u00e3o e defini\u00e7\u00e3o labial respeitando a harmonia facial.' },
  { icon: <UserCircle size={32} weight="duotone" />, title: 'Harmoniza\u00e7\u00e3o Masculina', desc: 'Protocolos exclusivos para rosto masculino. Pioneiro nacional na \u00e1rea.' },
  { icon: <ShieldCheck size={32} weight="duotone" />, title: 'Fios de Sustenta\u00e7\u00e3o', desc: 'Lifting n\u00e3o cir\u00fargico com fios para sustenta\u00e7\u00e3o e rejuvenescimento.' },
  { icon: <Syringe size={32} weight="duotone" />, title: 'Lipo de Papada', desc: 'Elimina\u00e7\u00e3o do duplo queixo com t\u00e9cnica minimamente invasiva.' },
]

const REVIEWS = [
  { name: 'M\u00e1rcia T.', text: 'O Dr. Vitor \u00e9 um artista! O resultado ficou incrivelmente natural. Ningu\u00e9m percebeu que fiz, s\u00f3 elogiam a pele.', stars: 5 },
  { name: 'Fernando A.', text: 'Procurei um especialista em harmoniza\u00e7\u00e3o masculina e encontrei o melhor. Profissional s\u00e9rio e resultado impec\u00e1vel.', stars: 5 },
  { name: 'Daniela R.', text: 'Lip filler maravilhoso! Sutil e elegante, exatamente como eu queria. A equipe do instituto \u00e9 sensacional.', stars: 5 },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <Helmet><title>Dr. Vitor Erlacher | Harmoniza\u00e7\u00e3o Facial em Florian\u00f3polis</title></Helmet>

      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, padding: '16px 0',
        background: scrolled ? 'rgba(12,12,12,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none', WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(139,115,85,0.15)' : 'none', transition: 'all 0.4s',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#" style={{ fontFamily: 'var(--serif)', fontSize: '1.25rem', color: 'var(--accent)' }}>
            Dr. Vitor <span style={{ fontWeight: 300, color: 'var(--text-muted)' }}>Erlacher</span>
          </a>
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            {NAV.map(n => <a key={n.href} href={n.href} style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>{n.label}</a>)}
            <a href={wa('Ol\u00e1, gostaria de agendar uma consulta com o Dr. Vitor Erlacher.')} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--accent)', color: '#fff', padding: '10px 24px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 600 }}>
              <WhatsappLogo size={18} weight="duotone" /> Agendar
            </a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn" style={{ display: 'none', background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer' }}>
            {menuOpen ? <X size={28} /> : <List size={28} />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden', background: 'rgba(12,12,12,0.98)' }}>
              <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {NAV.map(n => <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} style={{ color: '#fff', padding: '10px 0', borderBottom: '1px solid var(--dark-border)' }}>{n.label}</a>)}
                <a href={wa('Agendar!')} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--accent)', color: '#fff', padding: '14px', borderRadius: '4px', fontWeight: 600, justifyContent: 'center' }}>
                  <WhatsappLogo size={18} weight="duotone" /> Agendar
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(160deg, #0C0C0C 0%, #15120E 50%, #0C0C0C 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,115,85,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2, paddingTop: '80px' }}>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0}
            style={{ color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '28px' }}>
            Refer\u00eancia Mundial em Harmoniza\u00e7\u00e3o Facial
          </motion.p>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#fff', marginBottom: '16px', lineHeight: 1.05, fontWeight: 300 }}>
            Dr. Vitor<br /><span style={{ color: 'var(--accent)' }}>Erlacher</span>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
            style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 36px', fontWeight: 300 }}>
            Especialista e Mestre em Harmoniza\u00e7\u00e3o Facial. 23 anos de forma\u00e7\u00e3o,
            5.000+ pacientes e 7.000+ profissionais capacitados. Pioneiro em harmoniza\u00e7\u00e3o masculina no Brasil.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}
            style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={wa('Ol\u00e1, gostaria de agendar uma consulta de harmoniza\u00e7\u00e3o facial.')} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--accent)', color: '#fff', padding: '16px 36px', borderRadius: '4px', fontWeight: 600 }}>
              <WhatsappLogo size={22} weight="duotone" /> Agendar Avalia\u00e7\u00e3o
            </a>
            <a href="#procedimentos" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', border: '1px solid var(--accent)', color: 'var(--accent)', padding: '16px 36px', borderRadius: '4px', fontWeight: 500 }}>
              Procedimentos <ArrowRight size={18} />
            </a>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginTop: '48px', padding: '12px 24px', background: 'rgba(139,115,85,0.08)', border: '1px solid rgba(139,115,85,0.2)', borderRadius: '50px' }}>
            <div style={{ display: 'flex', gap: '2px' }}>{[...Array(5)].map((_, i) => <Star key={i} size={16} weight="fill" style={{ color: 'var(--accent)' }} />)}</div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}><strong style={{ color: '#fff' }}>4.9</strong> &mdash; 250+ avalia\u00e7\u00f5es</span>
          </motion.div>
        </div>
      </section>

      {/* CREDENCIAIS */}
      <section style={{ padding: '80px 0', background: 'var(--dark-card)', borderTop: '1px solid var(--dark-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px', textAlign: 'center' }}>
            {[
              { icon: <GraduationCap size={36} weight="duotone" />, num: '23', label: 'Anos de Forma\u00e7\u00e3o' },
              { icon: <Users size={36} weight="duotone" />, num: '5.000+', label: 'Pacientes Atendidos' },
              { icon: <Certificate size={36} weight="duotone" />, num: '7.000+', label: 'Profissionais Capacitados' },
              { icon: <ShieldCheck size={36} weight="duotone" />, num: '2', label: 'Unidades (Floripa + Crici\u00fama)' },
            ].map((c, i) => (
              <motion.div key={c.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div style={{ color: 'var(--accent)', marginBottom: '8px' }}>{c.icon}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '2rem', color: 'var(--accent)' }}>{c.num}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>{c.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div style={{ aspectRatio: '3/4', background: 'linear-gradient(135deg, rgba(139,115,85,0.08), rgba(139,115,85,0.02))', borderRadius: '8px', border: '1px solid var(--dark-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <UserCircle size={100} weight="duotone" style={{ color: 'var(--accent)', opacity: 0.3 }} />
                  <p style={{ color: 'var(--text-muted)', marginTop: '16px', fontFamily: 'var(--serif)', fontSize: '1.1rem' }}>Dr. Vitor Erlacher</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <p style={{ color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>Sobre o Especialista</p>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', marginBottom: '20px' }}>
                Pioneiro em <span style={{ color: 'var(--accent)' }}>harmoniza\u00e7\u00e3o</span> masculina
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.8 }}>
                O Dr. Vitor Erlacher \u00e9 cirurgi\u00e3o-dentista, especialista e mestre em Harmoniza\u00e7\u00e3o Facial,
                com especializa\u00e7\u00e3o em Cirurgia Bucomaxilofacial. Refer\u00eancia mundial na \u00e1rea, destaca-se
                por sua expertise em t\u00e9cnicas que tratam e previnem sinais de envelhecimento.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.8 }}>
                Fundador e l\u00edder t\u00e9cnico do <strong style={{ color: 'var(--text)' }}>Instituto Vitor Erlacher</strong>,
                com unidades em Florian\u00f3polis e Crici\u00fama, j\u00e1 capacitou mais de 7.000 profissionais de sa\u00fade.
              </p>
              <a href={wa('Ol\u00e1, gostaria de saber mais sobre a harmoniza\u00e7\u00e3o facial com o Dr. Vitor.')} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--accent)', color: '#fff', padding: '14px 32px', borderRadius: '4px', fontWeight: 600 }}>
                <WhatsappLogo size={20} weight="duotone" /> Agendar Avalia\u00e7\u00e3o
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCEDIMENTOS */}
      <section id="procedimentos" style={{ padding: '100px 0', background: 'var(--dark-card)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>Procedimentos</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}>Especialidades do <span style={{ color: 'var(--accent)' }}>Instituto</span></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {PROCEDURES.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ padding: '32px', background: 'var(--dark)', border: '1px solid var(--dark-border)', borderRadius: '8px', transition: 'border-color .3s, transform .3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(139,115,85,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--dark-border)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <div style={{ color: 'var(--accent)', marginBottom: '16px' }}>{p.icon}</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', marginBottom: '10px' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href={wa('Ol\u00e1, gostaria de informa\u00e7\u00f5es sobre procedimentos.')} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--accent)', color: '#fff', padding: '16px 36px', borderRadius: '4px', fontWeight: 600 }}>
              <WhatsappLogo size={20} weight="duotone" /> Saiba Mais
            </a>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" style={{ padding: '100px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}>Diferenciais do <span style={{ color: 'var(--accent)' }}>Dr. Vitor</span></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
            {[
              { icon: <Certificate size={40} weight="duotone" />, title: 'Mestre em HOF', desc: 'Mestrado em Harmonia Orofacial e especializa\u00e7\u00e3o em Cirurgia Bucomaxilofacial.' },
              { icon: <Users size={40} weight="duotone" />, title: 'Refer\u00eancia Nacional', desc: 'Pioneiro no Brasil em harmoniza\u00e7\u00e3o masculina. Criador do curso Face do Poder.' },
              { icon: <Sparkle size={40} weight="duotone" />, title: 'Resultados Naturais', desc: 'Filosofia de realce da beleza natural. Cada rosto \u00e9 \u00fanico e tratado de forma individual.' },
              { icon: <ShieldCheck size={40} weight="duotone" />, title: 'Seguran\u00e7a Total', desc: 'Protocolos rigorosos de seguran\u00e7a em cl\u00ednica pr\u00f3pria com estrutura completa.' },
            ].map((d, i) => (
              <motion.div key={d.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                style={{ textAlign: 'center', padding: '32px' }}>
                <div style={{ color: 'var(--accent)', marginBottom: '16px' }}>{d.icon}</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', marginBottom: '10px' }}>{d.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" style={{ padding: '100px 0', background: 'var(--dark-card)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}>O que dizem nossos <span style={{ color: 'var(--accent)' }}>pacientes</span></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            {REVIEWS.map((r, i) => (
              <motion.div key={r.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                style={{ padding: '28px', background: 'var(--dark)', border: '1px solid var(--dark-border)', borderRadius: '8px' }}>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '14px' }}>{[...Array(r.stars)].map((_, j) => <Star key={j} size={16} weight="fill" style={{ color: 'var(--accent)' }} />)}</div>
                <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '16px' }}>&ldquo;{r.text}&rdquo;</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <UserCircle size={28} weight="duotone" style={{ color: 'var(--accent)' }} />
                  <p style={{ fontWeight: 600, fontSize: '0.85rem' }}>{r.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href={wa('Ol\u00e1! Vi os depoimentos e gostaria de agendar.')} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--accent)', color: '#fff', padding: '16px 36px', borderRadius: '4px', fontWeight: 600 }}>
              <WhatsappLogo size={20} weight="duotone" /> Agendar Avalia\u00e7\u00e3o
            </a>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p style={{ color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>Contato</p>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', marginBottom: '24px' }}>
                Agende sua <span style={{ color: 'var(--accent)' }}>avalia\u00e7\u00e3o</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { icon: <MapPin size={22} weight="duotone" />, label: 'Endere\u00e7o', value: ADDRESS },
                  { icon: <Phone size={22} weight="duotone" />, label: 'Telefone', value: PHONE_NUM },
                  { icon: <Clock size={22} weight="duotone" />, label: 'Hor\u00e1rio', value: 'Seg \u00e0 Sex \u2014 9h \u00e0s 18h' },
                  { icon: <InstagramLogo size={22} weight="duotone" />, label: 'Instagram', value: '@institutovitorerlacher' },
                ].map(c => (
                  <div key={c.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: 44, height: 44, borderRadius: '8px', background: 'rgba(139,115,85,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>{c.icon}</div>
                    <div><p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 2 }}>{c.label}</p><p>{c.value}</p></div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              style={{ padding: '40px', background: 'var(--dark-card)', border: '1px solid rgba(139,115,85,0.15)', borderRadius: '12px', textAlign: 'center' }}>
              <WhatsappLogo size={56} weight="duotone" style={{ color: 'var(--accent)', marginBottom: '20px' }} />
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', marginBottom: '12px' }}>Atendimento Exclusivo</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '28px' }}>Avalia\u00e7\u00e3o personalizada com o Dr. Vitor Erlacher.</p>
              <a href={wa('Ol\u00e1, gostaria de agendar uma avalia\u00e7\u00e3o com o Dr. Vitor Erlacher.')} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--accent)', color: '#fff', padding: '14px 32px', borderRadius: '4px', fontWeight: 600, width: '100%', justifyContent: 'center' }}>
                <WhatsappLogo size={20} weight="duotone" /> Enviar Mensagem
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <footer style={{ padding: '40px 0 20px', borderTop: '1px solid var(--dark-border)', background: 'var(--dark-card)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', marginBottom: '32px' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--serif)', color: 'var(--accent)', marginBottom: '12px' }}>Dr. Vitor Erlacher</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>Instituto Vitor Erlacher. Harmoniza\u00e7\u00e3o facial em Florian\u00f3polis e Crici\u00fama.</p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--serif)', marginBottom: '12px' }}>Links</h4>
              {NAV.map(n => <a key={n.href} href={n.href} style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '6px' }}>{n.label}</a>)}
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--serif)', marginBottom: '12px' }}>Contato</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{ADDRESS}<br />{PHONE_NUM}</p>
            </div>
          </div>
          <div style={{ borderTop: '1px solid var(--dark-border)', paddingTop: '20px', textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} Instituto Vitor Erlacher. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      <a href={wa('Agendar!')} target="_blank" rel="noopener noreferrer"
        style={{ position: 'fixed', bottom: 24, right: 24, width: 56, height: 56, borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(37,211,102,0.4)', zIndex: 999 }}>
        <WhatsappLogo size={30} weight="fill" style={{ color: '#fff' }} />
      </a>

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .mobile-menu-btn { display: block !important; } .about-grid, .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
        @media (min-width: 769px) { .mobile-menu-btn { display: none !important; } }
      `}</style>
    </>
  )
}
