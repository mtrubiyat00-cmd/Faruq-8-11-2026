function Biography({t, go}) {
  return (
    <>
      <PageHero
        eyebrow={t.aboutEyebrow}
        title={t.bioTitle}
        intro={t.bioIntro}
      />

      <section className="section">
        <div className="container bio-layout">

          <div className="bio-aside">
            <img
              src="/images/Advocate%20Sawgat.png"
              alt="Advocate Obaidullah Faruq (Sawgat)"
              className="bio-portrait"
              loading="lazy"
            />
          </div>

          <div className="bio-content">
            <h2>{t.aboutTitle}</h2>

            <p>{t.bioP1}</p>
            <p>{t.bioP2}</p>
            <p>{t.bioP3}</p>

            <div className="credential-grid">
              <div className="credential">
                <GraduationCap />
                <span>{t.credential1}</span>
                <small>{t.university}</small>
              </div>

              <div className="credential">
                <GraduationCap />
                <span>{t.credential2}</span>
                <small>{t.university}</small>
              </div>

              <div className="credential">
                <ShieldCheck />
                <span>{t.bar}</span>
                <small>{t.barSub}</small>
              </div>

              <div className="credential">
                <Landmark />
                <span>{t.association}</span>
                <small>{t.associationSub}</small>
              </div>
            </div>

            <div className="bio-facts">
              <div>
                <small>{t.practice}</small>
                <strong>
                  {t.family}, {t.criminal}, {t.consultation}
                </strong>
              </div>

              <div>
                <small>{t.jurisdiction}</small>
                <strong>{t.jurisdictionValue}</strong>
              </div>

              <div>
                <small>{t.court}</small>
                <strong>{t.courtValue}</strong>
              </div>
            </div>

            <button
              className="button button-dark"
              onClick={() => go('contact')}
            >
              {t.contact}
              <ArrowUpRight size={17} />
            </button>

          </div>
        </div>
      </section>
    </>
  );
}
