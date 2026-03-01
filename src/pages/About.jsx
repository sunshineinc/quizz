const aboutDetails = [
  `Welcome to SunQuiz, an interactive learning platform designed especially for Elementary and High School students. Our mission is to make studying more engaging, accessible, and fun through quizzes that reinforce school subjects in a dynamic way.`,

  `At SunQuiz, we believe that learning should feel motivating and rewarding. That’s why we provide subject-based quizzes covering Mathematics, Science, Portuguese, History, Geography, and more — all carefully crafted to match school-level content.`,

  `Our quizzes are built to help students practice, review, and strengthen their understanding of classroom topics. With instant feedback and performance tracking, students can identify their strengths and improve where needed. Teachers can also use SunQuiz as a supportive classroom tool or as homework reinforcement.`,

  `SunQuiz encourages curiosity, confidence, and academic growth. Each quiz is structured to promote critical thinking and knowledge retention in a fun, competitive, and stress-free environment.`,

  `We are committed to providing a safe and educational digital space where students can grow academically while enjoying the learning process. Thank you for choosing SunQuiz as your companion in school success!`
];

function About() {
  return (
    <div className="mx-auto flex w-[85%] animate-reveal flex-col items-center justify-center">
      <h1 className="page-heading">About SunQuiz</h1>

      <div className="card flex !w-full max-w-4xl flex-col gap-10 p-6 text-justify font-medium dark:text-red-300 sm:w-3/5 sm:text-xl">
        {aboutDetails.map((para, index2) => (
          <p
            key={index2}
            className="indent-10 first-letter:text-xl dark:text-gray-300 sm:first-letter:text-2xl"
          >
            {para}
          </p>
        ))}
      </div>

      <span className="mt-14 block font-semibold tracking-wide">
        Developed with ☀️ by &nbsp;
        <a
          className="cursor-pointer hover:underline"
          href="https://www.s4shibam.com"
          rel="noreferrer"
          target="_blank"
        >
          Sunshine Studio.
        </a>
      </span>

      <div className=" mt-8 inline-flex w-full items-center justify-center">
        <hr className="my-8 h-1 w-64 rounded border-0 bg-primary dark:bg-secondary" />
        <div className="absolute left-1/2 -translate-x-1/2 bg-light px-4 dark:bg-dark">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-gray-700 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 27"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default About;
