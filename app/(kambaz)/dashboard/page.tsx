import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="reactjs" />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />
        <div className="wd-dashboard-course"> 
            <Link href="/courses/2222" className="wd-dashboard-course-link">
                <Image src="/images/webdev.jpg" width={200} height={150} alt="webdev" />
                <div>
                    <h5> CS2222 </h5>
                    <p className="wd-dashboard-course-title">
                        Web Development
                    </p>
                <button> Go </button>
            </div>
            </Link>
        </div>
        <br />
        <div className="wd-dashboard-course"> 
            <Link href="/courses/3333" className="wd-dashboard-course-link">
                <Image src="/images/database.jpg" width={200} height={150} alt="database" />
                <div>
                    <h5> CS3333 </h5>
                    <p className="wd-dashboard-course-title">
                        Intro to Databases
                    </p>
                <button> Go </button>
            </div>
            </Link>
        </div>
        <br />
        <div className="wd-dashboard-course"> 
            <Link href="/courses/4444" className="wd-dashboard-course-link">
                <Image src="/images/cybersecurity.jpg" width={200} height={150} alt="cybersecurity" />
                <div>
                    <h5> CS4444 </h5>
                    <p className="wd-dashboard-course-title">
                        Cybersecurity
                    </p>
                <button> Go </button>
            </div>
            </Link>
        </div>
        <br />
        <div className="wd-dashboard-course">
            <Link href="/courses/5555" className="wd-dashboard-course-link">
                <Image src="/images/ood.jpg" width={200} height={150} alt="ood" />
                <div>
                    <h5> CS5555 </h5>
                    <p className="wd-dashboard-course-title">
                        Object Oriented Design
                    </p>
                <button> Go </button>
            </div>
            </Link>
        </div>
        <br />
        <div className="wd-dashboard-course">
            <Link href="/courses/6666" className="wd-dashboard-course-link">
                <Image src="/images/gamedev.jpg" width={200} height={150} alt="gamedev" />
                <div>
                    <h5> CS6666 </h5>
                    <p className="wd-dashboard-course-title">
                        Game Development
                    </p>
                <button> Go </button>
            </div>
            </Link>
        </div>
        <br />
        <div className="wd-dashboard-course">
            <Link href="/courses/7777" className="wd-dashboard-course-link">
                <Image src="/images/writing.jpg" width={200} height={150} alt="writing" />
                <div>
                    <h5> CS7777 </h5>
                    <p className="wd-dashboard-course-title">
                        Advanced Writing
                    </p>
                <button> Go </button>
            </div>
            </Link>
        </div>
        <br />
      </div>
    </div>
);}
