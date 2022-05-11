import Head from 'next/head'
import Link from '@/components/Link'
import Header from '@/components/content/Header'
import Footer from '@/components/content/Footer'

export default function Home() {
  return (
    <div className="bg-gray-900 px-2 lg:px-0">
      <Head>
        <title>WeDesk - Outsourcing Task Management Tool</title>
      </Head>
      <Header />

      <section className="w-full py-24 lg:py-52">
        <div className="flex h-full flex-col items-center justify-center space-y-2 lg:space-y-20">
          <div
            className="flex h-full flex-col items-center justify-center text-center lg:w-8/12 lg:space-y-8"
            style={{ maxWidth: '900px' }}
          >
            <h1 className="text-4xl font-extrabold text-white lg:text-6xl">
              Working with Freelancers made easy
            </h1>
            <div className="font-nomal mt-3 text-xl text-gray-400 lg:text-3xl">
              WeDesk aggregates task management, reviews, and approval that helps outsourcing
              process.
            </div>
          </div>

          <div className="container mx-auto flex flex-col items-center justify-center px-5 py-2 text-center">
            <div className="flex w-full flex-col items-center justify-center gap-2 lg:flex-row">
              <div className="mr-4x relativex w-64 text-left">
                <input
                  type="text"
                  placeholder="Email address"
                  id="requestaccess"
                  name="hero-field"
                  className="w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 px-3 py-1 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-900"
                />
              </div>
              <button
                type="submit"
                className="inline-flex rounded border-0 bg-indigo-500 px-6 py-2 text-white hover:bg-indigo-600 focus:outline-none"
              >
                Request Access
              </button>
            </div>
            <p className="mt-2 mb-8 w-full text-sm text-gray-500">
              When we launch, we will notify you.
            </p>
          </div>

          <img
            className="rounded drop-shadow-2xl lg:w-10/12 lg:rounded-lg"
            src="images/desk.png"
            alt=""
          />
        </div>
      </section>

      <section className="body-font flex w-full flex-col items-center justify-center text-gray-400">
        <div className="flex h-full flex-col items-center justify-center text-center lg:w-2/3 lg:space-y-8">
          <h1 className="text-4xl font-extrabold text-white">
            Integrate Upwork and manage tasks into a single workspace
          </h1>
          <div className="font-nomal mt-3 text-2xl text-gray-400">
            When you work with WeDesk, you can easily outsource and manage the remote team. You
            don't need to use different tools for managing external team.
          </div>
        </div>
        <div className="container mx-auto px-5 py-24">
          <div className="-m-4 flex flex-wrap">
            <div className="p-4 lg:w-1/3">
              <div className="relative h-full overflow-hidden rounded-lg bg-gray-600 bg-opacity-75 px-8 pt-16 pb-24 text-center">
                <h1 className="title-font mb-3 text-xl font-medium text-white sm:text-2xl">Silo</h1>
                <p className="mb-3 leading-relaxed">
                  When you initiate a task, no matter how many times it gets bounced between your
                  collaborators, you get to review all activities and progressions.
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="relative h-full overflow-hidden rounded-lg bg-gray-600 bg-opacity-75 px-8 pt-16 pb-24 text-center">
                <h1 className="title-font mb-3 text-xl font-medium text-white sm:text-2xl">
                  Distraction
                </h1>
                <p className="mb-3 leading-relaxed">
                  It is not necessary to see all the information every time you get into the tool.
                  Using assignment, request, and approval functions, people can collaborate with
                  others. It helps you focus on your work by hiding distractions.
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="relative h-full overflow-hidden rounded-lg bg-gray-600 bg-opacity-75 px-8 pt-16 pb-24 text-center">
                <h1 className="title-font mb-3 text-xl font-medium text-white sm:text-2xl">
                  Communication
                </h1>
                <p className="mb-3 leading-relaxed">
                  It is easy to see what works well and where the bottleneck is when you use WeDesk.
                  Because it visualizes the work progress and communicates it effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex w-full flex-col items-center py-3 lg:py-12">
        <div className="h-1 w-16 bg-gray-200"></div>
      </div>

      <section className="w-full px-3 lg:py-20 lg:px-0">
        <div className="flex h-full flex-col items-center justify-center space-y-8 lg:flex-row">
          <div
            className="flex h-full flex-col items-center justify-center space-y-8 text-center lg:w-1/2 lg:px-12"
            style={{ maxWidth: '800px' }}
          >
            <h1 className="text-4xl font-extrabold text-white">
              Handle tasks in a single dashboard
            </h1>
            <div className="font-nomal mt-3 text-2xl text-gray-400">
              Keyboard friendly lightweight app that help you manage tasks well.
            </div>
          </div>

          <img
            className="rounded-lg drop-shadow-2xl lg:-mr-16 lg:w-9/12"
            src="images/task-full.png"
            alt=""
          />
        </div>
      </section>

      <section className="mt-6 w-full px-3 lg:py-20 lg:px-0">
        <div className="flex h-full flex-col items-center justify-center space-y-8 lg:flex-row">
          <img
            className="rounded-lg drop-shadow-2xl lg:-ml-8 lg:w-7/12"
            src="images/assignment.png"
            alt=""
          />
          <div
            className="flex h-full flex-col items-center justify-center space-y-8 text-center lg:w-1/2 lg:px-12"
            style={{ maxWidth: '800px' }}
          >
            <h1 className="text-4xl font-extrabold text-white">Assignment tracking system.</h1>
            <div className="font-nomal mt-3 text-2xl text-gray-400">
              Client keep track of tasks, manage deadlines, and contracts. Freelancer can approval
              processes in as their comfort zone with clients.
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 w-full px-3 lg:py-20 lg:px-0">
        <div className="flex h-full flex-col items-center justify-center space-y-8 lg:flex-row">
          <div
            className="flex h-full flex-col items-center justify-center space-y-8 text-center lg:w-1/2 lg:px-12"
            style={{ maxWidth: '800px' }}
          >
            <h1 className="text-4xl font-extrabold text-white">
              Request tasks instead of chatting
            </h1>
            <div className="font-nomal mt-3 text-2xl text-gray-400">
              Popup and assign new task as a simple manner that help you keep track of tasks.
            </div>
          </div>
          <img
            className="rounded-lg drop-shadow-2xl lg:-mr-8 lg:w-7/12"
            src="images/request.png"
            alt=""
          />
        </div>
      </section>

      <section className="mt-6 w-full px-3 lg:py-20 lg:px-0">
        <div className="flex h-full flex-col items-center justify-center space-y-8 lg:flex-row">
          <div className="flex flex-col items-center justify-center rounded-3xl bg-video-01 bg-cover py-24 drop-shadow-2xl lg:-ml-8 lg:w-7/12">
            <video
              className="w-10/12 rounded drop-shadow-2xl lg:-ml-8"
              src="images/voiz-example.mp4"
              autoPlay
              controls
              loop
              muted
            ></video>
          </div>
          <div
            className="flex h-full flex-col items-center justify-center space-y-8 text-center lg:w-1/2 lg:px-12"
            style={{ maxWidth: '800px' }}
          >
            <h1 className="text-4xl font-extrabold text-white">Record voice with mouse gestures</h1>
            <div className="font-nomal mt-3 text-2xl text-gray-400">
              Share your thoughts vividly on the results by recording voice with mouse gestures,
              annotation on images and pdf files.
            </div>
          </div>
        </div>
      </section>

      <div className="flex w-full flex-col items-center py-3 lg:py-12">
        <div className="h-1 w-16 bg-gray-200"></div>
      </div>

      <section className="w-full py-12 lg:py-20">
        <div className="flex h-full flex-wrap items-center justify-center space-y-2 lg:space-y-8">
          <div
            className="flex h-full flex-col items-center justify-center px-12 text-center lg:w-1/2 lg:space-y-8"
            style={{ maxWidth: '800px' }}
          >
            <h1 className="text-4xl font-extrabold text-white">
              Tasks won't be completed unless you say done.
            </h1>
            <div className="font-nomal mt-3 text-2xl text-gray-400">
              Review and track all of your freelancers' workflows.
            </div>
          </div>

          <img
            className="rounded-lg drop-shadow-2xl lg:-mr-8 lg:w-8/12"
            src="images/task-detail.png"
            alt=""
          />
        </div>
      </section>

      <section className="w-full py-12">
        <div className="flex h-full flex-col items-center justify-center lg:space-y-20">
          <div
            className="flex h-full flex-col items-center justify-center space-y-8 text-center lg:w-1/2"
            style={{ maxWidth: '800px' }}
          >
            <h1 className="text-4xl font-extrabold text-white lg:text-6xl">
              Integrate all your Upwork freelancers.
            </h1>
            <div className="font-nomal mt-3 text-xl text-gray-400 lg:text-3xl">
              It's time to avoid distractions.
            </div>
          </div>

          <div className="container mx-auto flex flex-col items-center justify-center px-5 py-2 text-center">
            <div className="flex w-full flex-col items-center justify-center gap-2 lg:flex-row">
              <div className="mr-4x relativex w-64 text-left">
                <input
                  type="text"
                  placeholder="Email address"
                  id="hero-field"
                  name="hero-field"
                  className="w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 px-3 py-1 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-900"
                />
              </div>
              <button className="inline-flex rounded border-0 bg-indigo-500 px-6 py-2 text-white hover:bg-indigo-600 focus:outline-none">
                Request Access
              </button>
            </div>
            <p className="mt-2 mb-8 w-full text-sm text-gray-500">
              When we launch, we will notify you.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
