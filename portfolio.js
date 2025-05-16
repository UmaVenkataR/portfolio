const techIcons = [
            'fa-html5', 'fa-css3-alt', 'fa-js', 'fa-react', 'fa-vuejs', 
            'fa-angular', 'fa-node', 'fa-npm', 'fa-git-alt', 'fa-github',
            'fa-sass', 'fa-bootstrap', 'fa-figma', 'fa-adobe', 'fa-docker',
            'fa-python', 'fa-java', 'fa-php', 'fa-laravel', 'fa-wordpress',
            'fa-aws', 'fa-google', 'fa-microsoft', 'fa-apple', 'fa-android',
            'fa-database', 'fa-server', 'fa-terminal', 'fa-code', 'fa-file-code',
            'fa-chart-bar', 'fa-chart-line', 'fa-chart-pie', 'fa-mobile-alt', 'fa-tablet-alt'
        ];

        // Additional projects data
        const additionalProjects = [
            {
                title: "Social Media Dashboard",
                description: "Comprehensive dashboard for managing multiple social media accounts with analytics.",
                icon: "fa-share-alt",
                gradient: "from-pink-500 to-rose-500",
                tags: ["React", "Firebase", "TailwindCSS"]
            },
            {
                title: "E-Learning Platform",
                description: "Interactive online learning system with video courses and quizzes.",
                icon: "fa-graduation-cap",
                gradient: "from-blue-500 to-cyan-500",
                tags: ["Vue.js", "Node.js", "MongoDB"]
            },
            {
                title: "Task Management App",
                description: "Productivity application for organizing tasks with team collaboration features.",
                icon: "fa-tasks",
                gradient: "from-purple-500 to-indigo-500",
                tags: ["React Native", "GraphQL", "AWS"]
            },
            {
                title: "Weather Forecast App",
                description: "Real-time weather forecasting application with location-based services.",
                icon: "fa-cloud-sun",
                gradient: "from-amber-500 to-yellow-500",
                tags: ["JavaScript", "API Integration", "Geolocation"]
            },
            {
                title: "Recipe Finder",
                description: "Application for discovering recipes based on available ingredients.",
                icon: "fa-utensils",
                gradient: "from-emerald-500 to-teal-500",
                tags: ["Vue.js", "API Integration", "Firebase"]
            },
            {
                title: "Portfolio Template",
                description: "Customizable portfolio template for creative professionals.",
                icon: "fa-palette",
                gradient: "from-violet-500 to-fuchsia-500",
                tags: ["HTML/CSS", "JavaScript", "Responsive Design"]
            }
        ];
        // Dark mode toggle functionality
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const mobileDarkModeToggle = document.getElementById('mobile-dark-mode-toggle');
        const mobileDarkIcon = document.getElementById('mobile-dark-icon');

        // Create floating tech icons
        function createFloatingIcons() {
            const introScreen = document.getElementById('intro-screen');
            
            techIcons.forEach((icon, index) => {
                const techIcon = document.createElement('i');
                techIcon.className = `tech-icon fab ${icon}`;
                
                const startX = Math.random() * 100;
                const startY = Math.random() * 100;
                const endX = Math.random();
                const endY = Math.random();
                const duration = 10 + Math.random() * 10; // 10-20 seconds
                const delay = Math.random() * 5; // 0-5 seconds delay
                
                techIcon.style.setProperty('--tx', endX);
                techIcon.style.setProperty('--ty', endY);
                techIcon.style.left = `${startX}%`;
                techIcon.style.top = `${startY}%`;
                techIcon.style.animationDuration = `${duration}s`;
                techIcon.style.animationDelay = `${delay}s`;
                
                introScreen.appendChild(techIcon);
            });
        }

        // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles-container');
            
            const numParticles = 500;
            
            for (let i = 0; i < numParticles; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                const size = Math.random() * 5 + 2; // 2px to 7px
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                if(darkModeToggle.checked){
                    particle.style.background = 'rgba(255, 255, 255, 0.5)';
                } else {
                    particle.style.background = 'rgba(0, 0, 0, 0.5)';
                }
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.animationDuration = `${Math.random() * 10 + 5}s`; // 5s to 15s
                particle.style.animationDelay = `${Math.random() * 5}s`; // 0s to 5s delay
                
                particlesContainer.appendChild(particle);
            }
        }

        // Create additional projects in modal
        function createAdditionalProjects() {
            const projectsContainer = document.querySelector('#all-projects-modal .grid');
            
            additionalProjects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                projectCard.innerHTML = `
                    <div class="project-card-inner">
                        <div class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md card-hover h-full flex flex-col">
                            <div class="h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center relative overflow-hidden">
                                <i class="fas ${project.icon} text-6xl text-white opacity-90"></i>
                                <div class="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition duration-300 flex items-center justify-center">
                                    <span class="text-white font-medium">View Details</span>
                                </div>
                            </div>
                            <div class="p-6 flex-grow">
                                <h3 class="text-xl font-semibold   mb-2">${project.title}</h3>
                                <p class="  mb-4">${project.description}</p>
                                <div class="flex flex-wrap gap-2 mb-4">
                                    ${project.tags.map(tag => `<span class="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 text-xs px-3 py-1 rounded-full">${tag}</span>`).join('')}
                                </div>
                            </div>
                            <div class="px-6 pb-6">
                                <a href="#" class="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium inline-flex items-center">
                                    View Project <i class="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                `;
                
                projectsContainer.appendChild(projectCard);
            });
        }

        // Initialize intro animation
        function initIntroAnimation() {
            createFloatingIcons();
            createAdditionalProjects();
            
            setTimeout(() => {
                document.getElementById('intro-screen').style.opacity = '0';
                document.getElementById('intro-screen').style.pointerEvents = 'none';
                document.getElementById('portfolio-page').style.display = 'block';
                
                createParticles();
                
                setTimeout(() => {
                    document.getElementById('intro-screen').remove();
                }, 1000);
            }, 5000);
        }

        function setDarkMode(enabled) {
            if (enabled) {
                document.body.classList.add('dark-mode');
                mobileDarkIcon.classList.remove('fa-moon');
                mobileDarkIcon.classList.add('fa-sun');
            } else {
                document.body.classList.remove('dark-mode');
                mobileDarkIcon.classList.remove('fa-sun');
                mobileDarkIcon.classList.add('fa-moon');
            }
            createParticles();
            localStorage.setItem('darkMode', enabled);
        }

        // Initialize dark mode based on preference or system setting
        const savedPreference = localStorage.getItem('darkMode');
        const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialDarkMode = savedPreference !== null ? savedPreference === 'true' : systemPreference;
        setDarkMode(initialDarkMode);
        darkModeToggle.checked = initialDarkMode;

        // Event listeners for dark mode toggles
        darkModeToggle.addEventListener('change', () => {
            setDarkMode(darkModeToggle.checked);
        });

        mobileDarkModeToggle.addEventListener('click', () => {
            darkModeToggle.checked = !darkModeToggle.checked;
            setDarkMode(darkModeToggle.checked);
        });

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', initIntroAnimation);

        // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                
                const mobileMenu = document.getElementById('mobile-menu');
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            });
        });

        // View All Projects modal
        document.getElementById('view-all-projects').addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('all-projects-modal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });

        // Close All Projects modal
        document.getElementById('close-projects-modal').addEventListener('click', function() {
            document.getElementById('all-projects-modal').classList.add('hidden');
            document.body.style.overflow = 'auto';
        });

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === document.getElementById('all-projects-modal')) {
                document.getElementById('all-projects-modal').classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });

        // Scroll animation for elements
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.fade-in');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);

        // Animate skill bars on scroll
        const animateSkillBars = () => {
            const skillBars = document.querySelectorAll('.skill-bar');
            
            skillBars.forEach(bar => {
                const elementPosition = bar.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    bar.style.width = bar.style.width;
                }
            });
        };

        window.addEventListener('scroll', animateSkillBars);
        window.addEventListener('load', animateSkillBars);

        // Add hover effect to project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.querySelector('.project-card-inner').style.transform = 'rotateY(10deg)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.querySelector('.project-card-inner').style.transform = 'rotateY(0deg)';
            });
        });

        // Project modal functionality
        const modal = document.getElementById('project-modal');
        const closeModal = document.getElementById('close-modal');
        
        document.querySelectorAll('.project-card a[href="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
        });
        
        closeModal.addEventListener('click', () => {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });

        // Adjust section heights on load and resize
        function adjustSectionHeights() {
            const sections = document.querySelectorAll('.full-vh');
            const windowHeight = window.innerHeight;
            const navHeight = document.querySelector('nav').offsetHeight;
            
            sections.forEach(section => {
                section.style.minHeight = `${windowHeight - navHeight}px`;
            });
        }

        function handleResize() {
            adjustSectionHeights();
        }
        
        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize);