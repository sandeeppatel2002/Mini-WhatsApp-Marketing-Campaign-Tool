function Home() {
  return (
    <div>
      <main className="container my-2">
        <section className="bg-light py-5">
          <div className="container px-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-xxl-8">
                <div className="text-center my-5">
                  <h2 className="display-5 fw-bolder">
                    <span className="text-gradient d-inline">About Me</span>
                  </h2>
                  <p className="lead fw-light mb-4">
                    Hello, I'm Sandeep Patel, a passionate software developer.
                  </p>
                  <p className="text-muted">
                    I recently developed a{" "}
                    <strong>Mini WhatsApp Marketing Campaign Tool</strong>, a
                    full-stack web application that streamlines the process of
                    running marketing campaigns via WhatsApp. This tool is built
                    using the MERN stack (MongoDB, Express.js, React.js,
                    Node.js) and adheres to the MVC (Model-View-Controller)
                    architectural pattern, ensuring a clean separation of
                    concerns and scalable code structure.
                  </p>
                  <p className="text-muted">
                    The tool enables users to manage contacts, send personalized
                    messages, and track campaign performance, all within a
                    user-friendly interface. The backend, powered by Node.js and
                    Express, handles data operations and integrates seamlessly
                    with MongoDB for efficient data storage. The frontend, built
                    with React, offers a dynamic and responsive user experience.
                  </p>
                  <p className="text-muted">
                    This project showcases my skills in full-stack development,
                    particularly in building robust, scalable web applications.
                    I am excited to continue exploring new technologies and take
                    on challenging projects.
                  </p>
                  <div className="d-flex justify-content-center fs-2 gap-4">
                    <a
                      className="text-gradient"
                      href="https://twitter.com/your_profile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a
                      className="text-gradient"
                      href="https://www.linkedin.com/in/your_profile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a
                      className="text-gradient"
                      href="https://github.com/your_profile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
