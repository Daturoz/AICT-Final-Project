<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Premium Creative Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet"
    <style>
        /* Custom CSS Variables & Styling */
        :root {
            --primary-color: #6c5ce7;
            --secondary-color: #a29bfe;
            --dark-bg: #0f0c1b;
            --card-bg: rgba(255, 255, 255, 0.03);
            --border-color: rgba(255, 255, 255, 0.1);
            --text-light: #f8f9fa;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background-color: var(--dark-bg);
            color: var(--text-light);
            overflow-x: hidden;
            scroll-behavior: smooth;
        }

        /* Glassmorphism Navbar */
        .navbar {
            background: rgba(15, 12, 27, 0.7) !important;
            backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--border-color);
            transition: all 0.3s ease;
        }

        .navbar-brand, .nav-link {
            color: var(--text-light) !important;
            font-weight: 600;
        }

        .nav-link:hover {
            color: var(--secondary-color) !important;
        }

        /* Hero Section with Custom Animations */
        .hero-section {
            min-height: 100vh;
            display: flex;
            align-items: center;
            background: radial-gradient(circle at 90% 10%, rgba(108, 92, 231, 0.15) 0%, transparent 40%);
            position: relative;
        }

        .hero-title {
            font-size: 3.5rem;
            font-weight: 700;
            background: linear-gradient(45deg, #fff, var(--secondary-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        /* JavaScript Typewriter Dynamic Visual Styling */
        .txt-type {
            color: var(--primary-color);
            border-right: 3px solid var(--primary-color);
            animation: blink 0.7s infinite;
        }

        @keyframes blink {
            50% { border-color: transparent; }
        }

        /* Cards and Sections Layout */
        .section-padding {
            padding: 100px 0;
        }

        .custom-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            backdrop-filter: blur(5px);
            border-radius: 16px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .custom-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 30px rgba(108, 92, 231, 0.2);
            border-color: var(--primary-color);
        }

        .icon-box {
            font-size: 2.5rem;
            color: var(--primary-color);
            margin-bottom: 20px;
        }

        /* Form Controls styling */
        .form-control {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid var(--border-color);
            color: #fff;
        }

        .form-control:focus {
            background: rgba(255, 255, 255, 0.08);
            color: #fff;
            border-color: var(--primary-color);
            box-shadow: none;
        }

        .btn-custom {
            background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 30px;
            font-weight: 600;
            transition: opacity 0.3s;
        }

        .btn-custom:hover {
            opacity: 0.9;
            color: white;
        }
    </style>
</head>
<body>

    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#"><i class="fa-solid fa-code me-2"></i>PROJECT.AI</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <section id="home" class="hero-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7">
                    <h5 class="text-uppercase text-tracking tracking-wider text-muted mb-3">Welcome to the Future</h5>
                    <h1 class="hero-title mb-4">Building Digital <br>Experiences that <span class="txt-type" id="typewriter"></span></h1>
                    <p class="lead text-muted mb-5">A high-performance final project presentation template showcasing responsive layouts, custom component logic, and high-fidelity modern assets.</p>
                    <a href="#projects" class="btn btn-custom">Explore Work <i class="fa-solid fa-arrow-right ms-2"></i></a>
                </div>
            </div>
        </div>
    </section>

    <section id="services" class="section-padding">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="fw-bold">Core Capabilities</h2>
                <p class="text-muted">Engineered using the best front-end architectures</p>
            </div>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card custom-card p-4 h-100">
                        <div class="icon-box"><i class="fa-solid fa-layer-group"></i></div>
                        <h4 class="fw-bold mb-3">UI/UX Architecture</h4>
                        <p class="text-muted">Utilizing structural responsive grids via Bootstrap 5 layout structures combined with semantic HTML element hierarchies.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card custom-card p-4 h-100">
                        <div class="icon-box"><i class="fa-solid fa-bolt"></i></div>
                        <h4 class="fw-bold mb-3">Dynamic Interaction</h4>
                        <p class="text-muted">Vanllla JavaScript integration driving real-time state changes, dynamic elements, and content processing loops.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card custom-card p-4 h-100">
                        <div class="icon-box"><i class="fa-solid fa-palette"></i></div>
                        <h4 class="fw-bold mb-3">Custom Variables</h4>
                        <p class="text-muted">Styled natively via clean CSS variables, glassmorphism panels, structural micro-interactions, and uniform design tokens.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="projects" class="section-padding bg-black bg-opacity-25">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="fw-bold">Project Case Studies</h2>
                <p class="text-muted">Interactive components rendered dynamically</p>
            </div>
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="card custom-card overflow-hidden">
                        <div class="p-4">
                            <span class="badge bg-primary mb-3">Web Architecture</span>
                            <h4 class="fw-bold">E-Commerce Pipeline</h4>
                            <p class="text-muted">A deep dive into high-throughput web frontends featuring asynchronous script behaviors and modular responsive grids.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card custom-card overflow-hidden">
                        <div class="p-4">
                            <span class="badge bg-info mb-3">JavaScript Logic</span>
                            <h4 class="fw-bold">Interactive Dashboard</h4>
                            <p class="text-muted">A clean interface demonstrating modular logic, programmatic element manipulation, and system asset telemetry rendering.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="section-padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="card custom-card p-5">
                        <h3 class="text-center fw-bold mb-4">Initialize Connection</h3>
                        <form id="contactForm">
                            <div class="mb-3">
                                <label class="form-label">Identifier / Name</label>
                                <input type="text" class="form-control" required placeholder="John Doe">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Secure Return Email Address</label>
                                <input type="email" class="form-control" required placeholder="name@domain.com">
                            </div>
                            <div class="mb-4">
                                <label class="form-label">Transmission / Message</label>
                                <textarea class="form-control" rows="4" required placeholder="Type your query here..."></textarea>
                            </div>
                            <button type="submit" class="btn btn-custom w-100">Send Transmission</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="py-4 border-top border-secondary border-opacity-10 text-center text-muted">
        <p class="small mb-0">&copy; 2026 AICT-Final-Project Core Engine. Built with Bootstrap, CSS3, & JavaScript.</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

    <script>
        class TypeWriter {
            constructor(txtElement, words, wait = 3000) {
                this.txtElement = txtElement;
                this.words = words;
                this.txt = '';
                this.wordIndex = 0;
                this.wait = parseInt(wait, 10);
                this.type();
                this.isDeleting = false;
            }

            type() {
                const current = this.wordIndex % this.words.length;
                const fullTxt = this.words[current];

                if(this.isDeleting) {
                    this.txt = fullTxt.substring(0, this.txt.length - 1);
                } else {
                    this.txt = fullTxt.substring(0, this.txt.length + 1);
                }

                this.txtElement.innerHTML = `${this.txt}`;

                let typeSpeed = 100;

                if(this.isDeleting) {
                    typeSpeed /= 2;
                }

                if(!this.isDeleting && this.txt === fullTxt) {
                    typeSpeed = this.wait;
                    this.isDeleting = true;
                } else if(this.isDeleting && this.txt === '') {
                    this.isDeleting = false;
                    this.wordIndex++;
                    typeSpeed = 500;
                }

                setTimeout(() => this.type(), typeSpeed);
            }
        }

        // Initialize dynamic components on load
        document.addEventListener('DOMContentLoaded', () => {
            const txtElement = document.getElementById('typewriter');
            const words = ['Inspire.', 'Scale.', 'Perform.', 'Adapt.'];
            new TypeWriter(txtElement, words, 2000);
            
            // Interactive Form Submission Alert Interceptor
            document.getElementById('contactForm').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Transmission successful! JavaScript event interception triggered.');
                this.reset();
            });
        });
    </script>
</body>
</html>
