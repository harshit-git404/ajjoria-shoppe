import logoMark from '@/assets/branding/logo.png';
import logoWithTagline from '@/assets/branding/logo-with-tagline.png';

const experiences = [
  {
    title: 'Welcome',
    description: 'Setting the tone for Day One.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCzVEPQVodQDvC4DY3BR-T1qSFFbzUR99aI5FbYjuF17mamkzhqSnPbZw_cFckch0hkRyiMOwQrRJ2ccEo0gyHc7nmm1s8H1FpudV2-dhgf0_zXAF9QJUJvzzdT1oSFAMDw2p0V5WM0HjCZOZTtu9CvpQ-g_8mgFOaBHmP2yu0gF-PCCFGB96udY4IHeruMw3Y0Tk9IUEc6FzcgsrECfGspnfM6heDVL_pdK33Q_VnemXHS4AO-9HJxA367IboPf-lYIBiiHgNVhNBr',
    className: 'aspect-square',
  },
  {
    title: 'Appreciation',
    description: 'Moments of genuine recognition.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC2upTliwnnU9Uc8rZUOD_aDEfaVGNo9cBK5hETxjdtMlWSjPdZqjjUYvJqOepAsodHe2jV3dXrDnwAuENkYVUvkEiReI8C-DkU7sNRj4BeQEsRC3n-3qvdfZOL0tjIKvjv_30HFNouGrX2oQgKjKXe3ulSMJ5aXv3Oadm31cizHB_nK1u9NpiMYQ3AUbbc1rag6-XpCjSb0m-NkPFwUxWUVpUjSqFI7Yh1egvnGObdstrjCEKBwKVdcU0-5r9TYjON9d0OC4DDGRUf',
    className: 'aspect-square',
  },
  {
    title: 'Executive',
    description: 'Distinction for decision makers.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBbS6HBujtD5x1fN4Ln9qpVgZV2ll5PlLOGbmhY6FkdfR_udJsWnPdA1YrFsITk38NQhXl4QIvHaconACvfHnoKZnxVcmcybcuIWZhhjQGrth-b2iRCiQzXKL85QIckuRlWYJ2Zgugi03svypalNUpg_hE6MGx9dyLoByGYGnOgGK3KFUdsOFdDDARnpxLWlKpB6rtdwdG8urJlcm0I8EFLlOoPEyi3mGcj40deB6j0NfVkrIn9Bj3ApKR-b_RbXF9YhRXDI78RvZFf',
    className: 'aspect-square',
  },
  {
    title: 'Culture & Wellness',
    description: 'Nurturing the human behind the screen.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBN6129MnP-6qtXT5SILNQGMHt8bVIJb8j16N94389HukFzn4qSRkE5HXjEodoo6Kn5OAbmfryndJB-T30l1WyUYNDsEjTE-ypwZgDoUSlEtggEAM67rAskz33S7ELqQWhVd0BoibVpNaBEfguaNAylW99PwW1DnA9x9gnvE6rxFrKXYdKfcO4R771TqfzUTxaVTbnPwxa7yJDbaUV6rWeO17C71U4IVsz0f_iv03bq32sTlQA1VQ2zZ_HWvlsfk63XKm1Ds-KN23fj',
    className: 'aspect-square md:col-span-2',
  },
  {
    title: 'Client',
    description: 'Fostering lasting partnerships.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAEpVsYs6kLLyts_xWO0MmhS2P8ReFKtDZazNBa5i8G0aG4u0OPNFFE0S_DXYVBE6Q6XDQL8iW-ksb4GT320fdrwWRabwEIyiICTX_1YJ3oHTgicMSVJCaB-cdMYnei9ln2FBZFrsXNl3CBYa3J7RxN31XoKBYdfvgIaflADOrtgDDeBMsDEePCU8vkme3w-XxOkI-2RRlrxNob-JGizj7PnQlGDIrOc2w_TnzrSYesdnATeLgOrZuR-l23gJ5j8Hhv5eUthVO7gD5D',
    className: 'aspect-square',
  },
];

const showcaseImages = [
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDlP--QhSB9Eb3RYgMdwjmKqn4gu-jfISnbG6-uwcupKq5UYnCzO2zEAbUFFnxh70ozN10lxaPM8YEBE2olYcuJGWhEJ0KpA82XQV9UdsnXYx0rrefGYQYt2txdudx3Ggs_3rirF5jUfThrPaKcJADIWxzSp1qSSgaIM7DHYU6W6CpP5TPRAhu3A8gdXyqE3vV0E7YozErZKdEmT6PCccfL0KtgMZVrSYqiTxd7ZI1p2BktjMBzf0Rf3AsOpET0kA7mbfx6YTq0dlri',
    offset: 'pt-12',
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB6kAoLYqaMDYe7wmtH_RlQNIotxMy62jjs5lsw3q3YA6gf5ymMl9jNrdmaMlsmNrGKLyCJalJKl3razmF5fQS5QZkwj879PuiykNKyr795GW-JvWyyg-0y5YITI-n2m2lZiuNwuxSPzPMX5UaRRBqREg3rKIwsRq-S7KHw2W8gC2SX6BmBJTEULuQr7ObZGHqx5IvwrQLReRBhlBX3bYhMua5BaP1yn49wJQedcqix0FnOvAwLGFDfhx3hbVxPRlRHbSfdJIUU9qsc',
    offset: '',
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBk5EG8eHngrL7V9gVuudJ8aFmlwYfQQJsPJIo4Tp-rKfU3Qxi_j83GZsrSeI-cRm-LgsxFH6j0-QGxjWZTZjy85yRA4EL1LaGa5DDW1AV7e1Rd0HZgyCUMRv0uw7vrhRJwmQg-hV2MkMTqCrFsizCvBDUSE6sS8rnKAxsFSN6KW2ImlFqs5fOjYn0u18KsFi7HnlssJN66Woue7uhJbP1ARTst6H3f312rkGJMELjkWzwuEaoqyKU0kRgb517RonVd8pNVdn2Wxkti',
    offset: 'pt-24',
  },
];

export function HomePage() {
  return (
    <div className="pb-16 md:pb-0">
      <section className="hero-gradient relative flex min-h-[751px] items-center justify-center overflow-hidden px-6 text-center md:px-16">
        <div className="relative z-10 mx-auto max-w-2xl">
          <img
            src={logoWithTagline}
            alt="Ajjoria logo with tagline"
            width={1102}
            height={644}
            className="mx-auto mb-8 h-auto w-[min(280px,70vw)] object-contain opacity-92 md:mb-10 md:w-[320px]"
          />
          <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.2em] text-[#e7c185]">
            Bespoke Corporate Artistry
          </span>
          <h1 className="font-display text-[48px] leading-[1.08] tracking-[-0.02em] text-white md:text-[64px]">
            Thoughtful gifting for modern workplaces.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-[18px] leading-[1.6] text-[#c8d0cc]">
            Ajjoria creates thoughtful gifting experiences designed to make professional appreciation
            feel more meaningful.
          </p>
          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#collections"
              className="rounded-[0.125rem] bg-[#e7c185] px-10 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#281900] shadow-[0_18px_35px_rgba(20,16,8,0.18)] hover:-translate-y-0.5 hover:bg-[#edd09d]"
            >
              Explore Experiences
            </a>
            <a
              href="#contact"
              className="rounded-[0.125rem] border border-[#e7c185]/40 px-10 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#e7c185] hover:-translate-y-0.5 hover:bg-[#e7c185]/10"
            >
              Let&apos;s Create Something Thoughtful
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-20">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcSVW9cQ0HEsmgY86jPMfvg0xNCiJ2uQGunM49vlgjHl1P5bThDsrpoSOXiTaAJBKn8rs_4-_xsCcAIGmh_7DtOLlzyKzEG8L9d3GxpGvmhzS-MOM8xpUJxLdD749s6V_gSndTW9TzGHomjaRjLLUcbHrYe0mDz9Ij58EdF7OKioOFtIPHQ5MmIVMU62cFevz65Ck8wIiJB85hbE6JabC1jB2PAFXkRS3_2wHcj6nFlWetrwA2KvVqLugFESbVhmhCmDAOqFKibM2L"
            alt="Luxury packaging with gold foil detailing on textured stock."
            className="w-[600px] grayscale brightness-50"
          />
        </div>
      </section>

      <section id="story" className="section-spacing bg-background px-6 md:px-16">
        <div className="mx-auto grid max-w-[1280px] items-center gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBekNHlFLCPhEeFWJ18WNkZHTM5XAoTRwMsle32_bDW2ueCOgnynRfjC3DYttMgYE-W1o_nIp2XN7WPZ9H2UyiCAw1IhHH5uzyZMRbHRmp0K-4zKaUgRAUMJJngkCgtmEhRzbSzi5tLm-uO72P6NQtc2QiQHVldU6PVmY-yv8MdqBw6Q165mX5bgt6uqbbVs-Pc-y6Fa3cPyJu2P51y_PvkwIwclhUD5bSSnWBrdPuG_idXsJGE6a-Sh8eic9cIZAZ0GO-ZcrRJlQUI"
              alt="Editorial hospitality still life with ceramic cups and a journal."
              className="aspect-[4/5] w-full rounded-[0.5rem] object-cover shadow-[0_20px_45px_rgba(19,33,29,0.08)]"
            />
          </div>

          <div className="order-1 space-y-6 md:order-2">
            <h2 className="section-heading font-display text-primary">Why We&apos;re Building Ajjoria</h2>
            <div className="space-y-6">
              <p className="text-[18px] leading-[1.6] text-muted-foreground">
                In a world of mass-produced novelties, we believe professional appreciation has lost its
                soul. Ajjoria was born from the desire to humanize the workplace, replacing generic
                gestures with intentional moments of connection.
              </p>
              <p className="text-base leading-[1.6] text-muted-foreground/80">
                Every gift we curate is a reflection of the recipient&apos;s value. We source from
                independent artisans who share our commitment to sustainability and craftsmanship,
                ensuring that every box tells a story of quality over quantity.
              </p>
              <div className="pt-4">
                <a
                  href="#contact"
                  className="link-underline text-xs font-semibold uppercase tracking-[0.18em] text-[#765928] hover:text-primary"
                >
                  Read our narrative
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="section-spacing bg-[#f5f3f2] px-6 md:px-16">
        <div className="mx-auto mb-12 max-w-[1280px] text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-outline">Collections</span>
          <h2 className="section-heading mt-2 font-display text-primary">Experience-Led Gifting</h2>
        </div>
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 md:grid-cols-3">
          {experiences.map((item) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-[0.35rem] border border-border/70 bg-background shadow-[0_16px_35px_rgba(19,33,29,0.05)] ${item.className}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045] group-hover:-translate-y-1"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-primary/12 to-primary/42 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0d1613] via-primary/80 to-transparent p-8">
                <h3 className="font-display text-[28px] leading-[1.3] text-white">{item.title}</h3>
                <p className="mt-2 max-w-[22ch] text-base leading-[1.6] text-white/84">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-spacing overflow-hidden bg-background px-6 md:px-16">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 md:flex-row">
          <div className="self-center md:w-1/3">
            <h2 className="section-heading font-display text-primary">Tactile Intentionality</h2>
            <p className="mt-6 text-base leading-[1.6] text-muted-foreground">
              We believe the unboxing is as important as the gift itself. Gold-foil details, layered
              textures, and hand-written notes define the Ajjoria experience.
            </p>
          </div>
          <div className="no-scrollbar flex gap-4 overflow-x-auto pb-8 md:w-2/3 md:gap-8">
            {showcaseImages.map((item) => (
              <div key={item.image} className={`group min-w-[300px] flex-shrink-0 ${item.offset}`}>
                <img
                  src={item.image}
                  alt="Ajjoria detail"
                  className="aspect-[3/4] w-full rounded-[0.25rem] object-cover shadow-[0_18px_40px_rgba(19,33,29,0.08)] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-primary px-6 text-center text-primary-foreground md:px-16">
        <div className="mx-auto max-w-2xl space-y-6">
          <span className="material-symbols-outlined text-[48px] text-[#e7c185]">auto_awesome</span>
          <blockquote className="font-display text-[28px] leading-[1.4] italic text-[#f5f3f2] md:text-[40px] md:leading-[1.2]">
            &quot;We didn&apos;t set out to build a gifting company. We set out to remind people that even in a
            digital world, a physical token of gratitude can change the entire energy of a team.&quot;
          </blockquote>
          <div className="pt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e7c185]">Founding Statement</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section-spacing bg-background px-6 md:px-16">
        <div className="mx-auto grid max-w-[1280px] items-start gap-10 md:grid-cols-2 md:gap-12">
          <div className="space-y-6">
            <h2 className="section-heading font-display text-primary">
              Let&apos;s create something thoughtful together.
            </h2>
            <p className="text-[18px] leading-[1.6] text-muted-foreground">
              Whether you&apos;re welcoming 500 new hires or thanking 10 key clients, we bring the same
              level of curation and care to every project.
            </p>
            <div className="space-y-5 pt-4">
              <div className="flex items-start gap-4 text-muted-foreground">
                <span className="material-symbols-outlined mt-0.5 text-[21px] text-[#8e7652]">mail</span>
                <a
                  href="mailto:ajjoria.shoppe@gmail.com"
                  className="link-underline text-base leading-[1.6] text-muted-foreground hover:text-primary"
                >
                  ajjoria.shoppe@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-4 text-muted-foreground">
                <span className="material-symbols-outlined mt-0.5 text-[21px] text-[#8e7652]">location_on</span>
                <span className="text-base leading-[1.6]">Dehradun, India</span>
              </div>
            </div>
          </div>

          <form className="luxury-panel space-y-8 rounded-[0.5rem] p-6 md:p-12">
            <div className="space-y-2.5">
              <label className="text-xs font-semibold uppercase tracking-[0.1em] text-outline">Name</label>
              <input
                type="text"
                className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-primary focus:border-[#c8a46b] focus:outline-none"
              />
            </div>
            <div className="space-y-2.5">
              <label className="text-xs font-semibold uppercase tracking-[0.1em] text-outline">Company</label>
              <input
                type="text"
                className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-primary focus:border-[#c8a46b] focus:outline-none"
              />
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-2.5">
                <label className="text-xs font-semibold uppercase tracking-[0.1em] text-outline">Email</label>
                <input
                  type="email"
                  className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-primary focus:border-[#c8a46b] focus:outline-none"
                />
              </div>
              <div className="space-y-2.5">
                <label className="text-xs font-semibold uppercase tracking-[0.1em] text-outline">Volume</label>
                <input
                  type="text"
                  className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-primary focus:border-[#c8a46b] focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-2.5">
              <label className="text-xs font-semibold uppercase tracking-[0.1em] text-outline">
                Tell us about your requirement
              </label>
              <textarea
                rows={4}
                className="w-full resize-none border-0 border-b border-border bg-transparent px-0 py-3 text-base text-primary focus:border-[#c8a46b] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-[0.2rem] bg-primary px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_35px_rgba(19,33,29,0.14)] hover:-translate-y-0.5 hover:bg-[#24332f]"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#f5f3f2] px-6 py-14 text-center md:px-16">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-8">
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2.5">
              <img
                src={logoMark}
                alt="Ajjoria logo"
                width={1074}
                height={622}
                className="h-8 w-auto object-contain"
              />
              <div className="font-display text-[28px] leading-[1.3] text-primary">Ajjoria</div>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8e7652]">
              Premium Gifting from Dehradun, India
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              { label: 'Collections', href: '#collections' },
              { label: 'Story', href: '#story' },
              { label: 'Bespoke Service', href: '#contact' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="link-underline text-sm tracking-[0.08em] text-[#765928] hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="h-px w-full max-w-lg bg-border/70" />
          <div className="space-y-2 text-sm tracking-wide text-foreground/80">
            <p>&copy; Ajjoria. Gifts That Feel Intentional.</p>
            <a href="mailto:ajjoria.shoppe@gmail.com" className="link-underline text-[#765928] hover:text-primary">
              ajjoria.shoppe@gmail.com
            </a>
          </div>
        </div>
      </footer>

      <nav className="fixed bottom-0 left-0 z-50 flex w-full justify-around border-t border-border/40 bg-background/95 px-4 py-3 backdrop-blur-md md:hidden">
        <a href="#" className="flex flex-col items-center justify-center rounded-full bg-[#ffd799]/20 px-4 py-1.5 text-primary">
          <span className="material-symbols-outlined">home</span>
          <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.1em]">Home</span>
        </a>
        <a href="#collections" className="flex flex-col items-center justify-center text-[#765928]/70">
          <span className="material-symbols-outlined">auto_awesome_motion</span>
          <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.1em]">Collections</span>
        </a>
        <a href="#story" className="flex flex-col items-center justify-center text-[#765928]/70">
          <span className="material-symbols-outlined">auto_awesome</span>
          <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.1em]">Why Us</span>
        </a>
        <a href="#contact" className="flex flex-col items-center justify-center text-[#765928]/70">
          <span className="material-symbols-outlined">person</span>
          <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.1em]">Contact</span>
        </a>
      </nav>
    </div>
  );
}
