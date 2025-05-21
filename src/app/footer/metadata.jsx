export async function generateMetadata() {
    return {
      title: "Footer Page | Front-End Web Developer",
      description: "Hey there! I'm Rohit, a passionate web developer specializing in front-end development. With 3 years of experience, I craft elegant, responsive, and efficient websites. Let's build something amazing together!",
      keywords: ["Web Developer", "Front-End Developer", "UI/UX", "JavaScript", "HTML", "CSS", "React", "Responsive Design"],
      authors: [{ name: "Rohit Kumar" }],
      creator: "Rohit Kumar",
      openGraph: {
        title: "Footer Page | Front-End Web Developer",
        description: "Passionate web developer with expertise in front-end technologies. Let's collaborate to bring your vision to life!",
        url: "https://rk9600.github.io/rk960/",
        siteName: "Rohit Kumar Portfolio",
        images: [
          {
            url: "/imgs/favicon.jpg", // Public folder se image ka path
            width: 1200,
            height: 630,
            alt: "Rohit Kumar Portfolio Banner",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Footer Page | Front-End Web Developer",
        description: "Specializing in front-end development and responsive web design.",
        images: ["/imgs/favicon.jpg"], // Public folder se image ka path
      },
    };
  }