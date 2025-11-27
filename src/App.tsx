import { SponsorshipTier } from "./components/SponsorshipTier";
import { StatCard } from "./components/StatCard";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import {
  Users,
  Calendar,
  Target,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Award,
  Lightbulb,
  Briefcase,
  HeartHandshake,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  const tiers = [
    {
      name: "Platinum",
      price: "₦2,000,000+",
      color: "#E5E4E2",
      featured: true,
      features: [
        "Prominent Branding: Top-tier logo placement as the Platinum Sponsor on all marketing collateral (posters, banners, digital media)",
        "Exclusive Speaking Slot: A dedicated 15-minute speaking slot during the Opening Ceremony or Grand Finale Conference",
        "Recruitment Booth: Dedicated space to set up a recruitment booth and engage directly with students",
        "Social Media: Prominent mention in all pre-event and post-event social media posts, with a dedicated 'Sponsor Spotlight' feature",
        "Media Recognition: Mention in all press releases and special thank you during the awards ceremony",
        "In-Kind Sponsorship: Option to provide branded merchandise or prizes in addition to cash sponsorship",
      ],
    },
    {
      name: "Gold",
      price: "₦1,000,000",
      color: "#FFD700",
      features: [
        "Major Branding: Prominent logo placement as a Gold Sponsor on all marketing collateral",
        "Commercial Speaking Opportunity: A 10-minute speaking opportunity during one of the daily sessions",
        "Recruitment Access: Access to a shared recruitment area to network with students",
        "Social Media: Highlighting in social media campaigns and dedicated appreciation posts",
      ],
    },
    {
      name: "Silver",
      price: "₦500,000",
      color: "#C0C0C0",
      features: [
        "Primary Branding: Logo placement as a Silver Sponsor on all marketing collateral",
        "Social Media: Inclusion in social media appreciation posts before and after the event",
        "Event Recognition: Mention in the opening and closing remarks",
      ],
    },
    {
      name: "Bronze",
      price: "₦250,000",
      color: "#CD7F32",
      features: [
        "Brand Visibility: Logo placement on all event posters and digital media",
        "Social Media: Inclusion in a social media 'thank you' post",
      ],
    },
  ];

  const stats = [
    {
      value: "500+",
      label: "STEM Students",
      icon: <Users className="h-8 w-8" />,
    },
    {
      value: "5 Days",
      label: "Event Duration",
      icon: <Calendar className="h-8 w-8" />,
    },
    {
      value: "University of Lagos",
      label: "Premier Institution",
      icon: <Award className="h-8 w-8" />,
    },
    {
      value: "2026",
      label: "Innovating the Future",
      icon: <TrendingUp className="h-8 w-8" />,
    },
  ];

  const budgetItems = [
    { item: "Hall", price: "5000000" },
    { item: "Banners", price: "75000" },
    { item: "Roll-up Banners", price: "60000" },
    { item: "Volunteer Name Tags", price: "40000" },
    { item: "Registration tags", price: "50000" },
    {
      item: "Certificate/Awards for Speakers and Judges",
      price: "200000",
    },
    { item: "T-shirts (Volunteers)", price: "225000" },
    { item: "Merch/Swags", price: "200000" },
    { item: "Food", price: "1200000" },
    { item: "Water/Drink", price: "200000" },
    { item: "Photography", price: "250000" },
    { item: "Videography", price: "250000" },
    { item: "Prizes", price: "1500000" },
    { item: "Prizes plaque/board", price: "200000" },
    { item: "DJ/Audio set", price: "250000" },
    { item: "Miscellaneous", price: "300000" },
  ];

  const totalBudget = budgetItems.reduce(
    (sum, item) => sum + parseInt(item.price),
    0,
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjB0ZWNobm9sb2d5JTIwd29ya3Nob3B8ZW58MXx8fHwxNzY0MDc1MDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Students technology workshop"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center space-y-6 px-4 max-w-5xl">
          <h1 className="text-4xl md:text-6xl">
            IEEE UNILAG Week 2026: Sponsorship Packet
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Your Opportunity to Inspire Nigeria's Next
            Generation of Innovators
          </p>
          <div className="mt-6 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg inline-block">
            <p className="text-lg md:text-xl">
              <strong>THEME:</strong> Inspire, Innovate,
              Integrate: Shaping Tomorrow with IEEE
            </p>
          </div>
          <Button
            size="lg"
            className="mt-8 bg-blue-600 hover:bg-blue-700"
          >
            Become a Sponsor
          </Button>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl">About IEEE UNILAG Week</h2>
            <p className="text-lg text-gray-700">
              The IEEE UNILAG Week 2026 is a premier five-day
              event dedicated to celebrating technology,
              innovation, and engineering excellence. Organized
              by the IEEE UNILAG Student Branch, this week-long
              series of workshops, competitions, and conferences
              will bring together over 500 of the brightest STEM
              students from the University of Lagos.
            </p>
            <p className="text-lg text-gray-700">
              We aim to bridge the gap between academia and
              industry, providing students with hands-on skills,
              networking opportunities, and direct exposure to
              the companies shaping Nigeria's future. By
              sponsoring this event, you will not only be
              investing in the future of technology in Nigeria
              but also directly engaging with your next
              generation of talent.
            </p>
            <div className="space-y-3 pt-4">
              <p className="text-lg text-gray-700">
                Our mission is a journey through three core
                pillars:
              </p>
              <div className="pl-4 space-y-2">
                <p className="text-gray-700">
                  <strong className="text-blue-600">
                    INSPIRE:
                  </strong>{" "}
                  To reveal the diverse career paths and
                  groundbreaking work of today's engineers.
                </p>
                <p className="text-gray-700">
                  <strong className="text-purple-600">
                    INNOVATE:
                  </strong>{" "}
                  To dive deep into the world of research, new
                  ideas, and cutting-edge technical creation.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-600">
                    INTEGRATE:
                  </strong>{" "}
                  To blend hands-on technical skills with the
                  professional polish needed to succeed.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-700 pt-4">
              This isn't just an event; it's the launch of a new
              legacy. As the{" "}
              <strong>first-ever IEEE Week</strong> at our
              university, we are building a five-day experience
              designed to empower students, forge industry
              connections, and showcase the future of
              engineering.
            </p>
            <p className="text-lg text-gray-700">
              The entire week will culminate in a grand finale
              conference, where we will celebrate our
              achievements and open our doors to inspire the
              next generation - inviting aspiring engineers from
              K-12 schools to witness the exciting world that
              awaits them.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1720608594472-bc29045eef28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3R1ZGVudHMlMjBlbmdpbmVlcmluZyUyMGxhYnxlbnwxfHx8fDE3NjQwNzUwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Students in engineering lab"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl text-center text-white mb-12">
            Event Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>

      {/* Our Aims & Objectives Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-6">
            Our Aims & Objectives
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            To deliver the most transformative, technically
            rich, and professionally impactful IEEE Week in
            UNILAG's history - a week that bridges innovation,
            collaboration, and leadership among engineering and
            technology students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <p className="text-gray-700">
                Engage a minimum of{" "}
                <strong>500 active participants</strong> across
                five days of hands-on, interactive sessions.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <Target className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-gray-700">
                Secure <strong>₦10,000,000</strong> in cash
                sponsorships and in-kind contributions (tools,
                materials, or services).
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <Briefcase className="h-5 w-5 text-purple-600" />
              </div>
              <p className="text-gray-700">
                Feature at least{" "}
                <strong>five notable industry leaders</strong>{" "}
                as keynote speakers or panelists.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <TrendingUp className="h-5 w-5 text-orange-600" />
              </div>
              <p className="text-gray-700">
                Achieve widespread <strong>visibility</strong>{" "}
                through local media coverage, university
                communications, and targeted social media
                campaigns.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 bg-pink-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <HeartHandshake className="h-5 w-5 text-pink-600" />
              </div>
              <p className="text-gray-700">
                Foster{" "}
                <strong>
                  cross-departmental collaboration
                </strong>{" "}
                among student engineers, innovators, and
                developers in UNILAG.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <Award className="h-5 w-5 text-indigo-600" />
              </div>
              <p className="text-gray-700">
                Establish{" "}
                <strong>
                  IEEE UNILAG Week as an annual signature event
                </strong>{" "}
                synonymous with professionalism, creativity, and
                technical excellence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* A Journey Through the Week Section */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl text-center mb-6">
            A Journey Through the Week
          </h2>
          <p className="text-xl text-center opacity-90 mb-16 max-w-3xl mx-auto">
            The 5-Day Event Timeline
          </p>

          <div className="space-y-12">
            {/* Day 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <div className="h-16 w-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">1</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl">
                    <span className="text-blue-400">
                      INSPIRE
                    </span>{" "}
                    - Charting Your Career
                  </h3>
                  <p className="text-gray-200">
                    We kick off the week by focusing on your
                    future. This day is dedicated to revealing
                    the vast landscape of opportunities for
                    electrical, electronics, and computer
                    engineers.
                  </p>
                  <ul className="space-y-2 text-gray-300 ml-4">
                    <li>
                      • <strong>Industry Insights:</strong> Hear
                      from professionals who have built
                      successful careers in diverse sectors
                    </li>
                    <li>
                      •{" "}
                      <strong>Career Panel & Breakouts:</strong>{" "}
                      Engage with a panel of experts in dynamic
                      Q&A and focused "Ask Me Anything" circles
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <div className="h-16 w-16 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">2</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl">
                    <span className="text-purple-400">
                      INNOVATE
                    </span>{" "}
                    - The Frontier of Research
                  </h3>
                  <p className="text-gray-200">
                    The focus shifts from "what's possible" to
                    "what's next." This day is all about the
                    power of innovation and research.
                  </p>
                  <ul className="space-y-2 text-gray-300 ml-4">
                    <li>
                      • <strong>From Lab to Lecture:</strong>{" "}
                      Gain insights from faculty on publishing
                      high-impact research papers
                    </li>
                    <li>
                      • <strong>Call for Papers:</strong>{" "}
                      Student researchers present their work
                      with winners recognized at the conference
                    </li>
                    <li>
                      • <strong>Innovation Pitch:</strong>{" "}
                      Platform for students to pitch brilliant
                      ideas to an engaged audience
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <div className="h-16 w-16 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">3</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl">
                    <span className="text-green-400">
                      INTEGRATE
                    </span>{" "}
                    - Building Your Technical Toolkit
                  </h3>
                  <p className="text-gray-200">
                    A great engineer integrates deep technical
                    knowledge with practical and soft skills.
                    This day is all about hands-on learning.
                  </p>
                  <ul className="space-y-2 text-gray-300 ml-4">
                    <li>
                      • <strong>Live Demos & Workshops:</strong>{" "}
                      Hands-on sessions with technology - from
                      web development to Arduino and
                      microcontrollers
                    </li>
                    <li>
                      • <strong>Professional Polish:</strong>{" "}
                      Workshop on building a powerful,
                      technically-focused resume and developing
                      essential soft skills
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <div className="h-16 w-16 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">4</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl">
                    <span className="text-orange-400">
                      CHALLENGE
                    </span>{" "}
                    - Where Innovation Meets Competition
                  </h3>
                  <p className="text-gray-200">
                    Put your knowledge to the test! This day is
                    dedicated to high-energy, friendly
                    competition through exciting quizzes and
                    team-based technical challenges.
                  </p>
                  <ul className="space-y-2 text-gray-300 ml-4">
                    <li>
                      • Challenge your problem-solving abilities
                      and technical know-how
                    </li>
                    <li>
                      • Innovate under pressure and win bragging
                      rights (and prizes!)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day 5 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <div className="h-16 w-16 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">5</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl">
                    <span className="text-yellow-400">
                      THE GRAND FINALE/CONFERENCE
                    </span>{" "}
                    - A Celebration of Tomorrow
                  </h3>
                  <p className="text-gray-200">
                    The week culminates in our flagship
                    conference, bringing together students,
                    faculty, industry leaders, and K-12 students
                    to witness the vibrant community that awaits
                    them in engineering.
                  </p>
                  <ul className="space-y-2 text-gray-300 ml-4">
                    <li>
                      •{" "}
                      <strong>
                        A Beacon for Future Engineers:
                      </strong>{" "}
                      Welcome aspiring engineers from local K-12
                      schools
                    </li>
                    <li>
                      • <strong>Conference Highlights:</strong>{" "}
                      Dynamic keynote speeches, panel sessions,
                      and project exhibitions
                    </li>
                    <li>
                      •{" "}
                      <strong>
                        The Grand Awards Ceremony:
                      </strong>{" "}
                      Celebrate research paper awards,
                      competition winners, and recognize our
                      team
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Sponsor Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">
            Why Sponsor?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl">Brand Visibility</h3>
              <p className="text-gray-600">
                Your brand will be at the forefront of the
                largest student-led tech event on campus. Your
                logo will be prominently displayed on all our
                digital and physical materials.
              </p>
            </div>

            <div className="space-y-4">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl">Talent Acquisition</h3>
              <p className="text-gray-600">
                Directly connect with and recruit top-tier
                students. Meet them in person during networking
                sessions and identify potential interns or
                full-time hires.
              </p>
            </div>

            <div className="space-y-4">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl">Industry Leadership</h3>
              <p className="text-gray-600">
                Position your company as a thought leader and
                innovator in the Nigerian tech ecosystem. Our
                keynote and panelist sessions provide a platform
                to share your company's vision and impact.
              </p>
            </div>

            <div className="space-y-4">
              <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <HeartHandshake className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-2xl">Community Impact</h3>
              <p className="text-gray-600">
                Demonstrate your commitment to fostering
                education and innovation in Nigeria. Your
                support helps provide resources and
                opportunities that directly impact student
                learning and career development.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1520110120835-c96534a4c984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHN0dWRlbnRzJTIwbmV0d29ya2luZ3xlbnwxfHx8fDE3NjQwNzUwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Students networking"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Sponsorship Tiers */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl">Sponsorship Tiers</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the sponsorship level that best aligns with
            your goals and budget
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, index) => (
            <SponsorshipTier key={index} {...tier} />
          ))}
        </div>

        {/* In-Kind Sponsorship */}
        <div className="mt-12 p-8 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-2xl mb-4">In-Kind Sponsorship</h3>
          <p className="text-gray-700 mb-4">
            We also welcome in-kind sponsorships, which can
            include:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>
                <strong>Prizes:</strong> Prizes for competition
                winners (e.g., tech gadgets, subscriptions,
                swag)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>
                <strong>Refreshments:</strong> Food and drinks
                for participants during the events
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>
                <strong>Merchandise:</strong> T-shirts,
                notebooks, or other branded items for attendees
              </span>
            </li>
          </ul>
          <p className="text-gray-700">
            Benefits for in-kind sponsors are negotiable and
            will be tailored to the value of the contribution.
          </p>
        </div>
      </div>

      {/* Budget Breakdown Section */}
      <div className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl text-center mb-6">
            IEEE UNILAG Week 2026 Budget Breakdown
          </h2>
          <p className="text-center text-gray-600 mb-12">
            This budget provides a detailed breakdown of the
            projected costs for the event, ensuring full
            transparency for sponsors and the organizing
            committee. All amounts are in Nigerian Naira (₦).
          </p>

          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left">S/N</th>
                    <th className="px-6 py-4 text-left">
                      ITEM
                    </th>
                    <th className="px-6 py-4 text-right">
                      PRICE (₦)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {budgetItems.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 text-gray-600">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4">{item.item}</td>
                      <td className="px-6 py-4 text-right">
                        {parseInt(item.price).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50">
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4">
                      <strong>TOTAL</strong>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <strong>
                        {totalBudget.toLocaleString()}
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl text-center mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-center mb-12 opacity-90">
            To discuss a partnership or to get a detailed
            breakdown of our budget plan, please contact:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-center space-y-3">
                <h3 className="text-xl">
                  Oluwapelumi Adegboyega
                </h3>
                <p className="text-sm opacity-75">
                  Chairperson, IEEE UNILAG Week 2026
                </p>
                <div className="pt-3 space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">
                      (+234) 902 884 7072
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">
                      haropis.inc@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-center space-y-3">
                <h3 className="text-xl">Eunice Odolokor</h3>
                <p className="text-sm opacity-75">
                  Vice-Chairperson, IEEE UNILAG Week 2026
                </p>
                <div className="pt-3 space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">
                      (+234) 807 064 4175
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">
                      euodolokor@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-center space-y-3">
                <h3 className="text-xl">Suliat Saka</h3>
                <p className="text-sm opacity-75">
                  Sponsorship Lead, IEEE UNILAG Week 2026
                </p>
                <div className="pt-3 space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">
                      (+234) 907 675 4171
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">
                      fiwealthkemhie@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-center space-y-3">
                <h3 className="text-xl">
                  Estherfavour Anyahara
                </h3>
                <p className="text-sm opacity-75">
                  Chairperson, IEEE UNILAG SB
                </p>
                <div className="pt-3 space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">
                      (+234) 818 565 5521
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">
                      ieeeunilagchapter@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lg text-center opacity-90 mb-8">
            We look forward to partnering with you to make IEEE
            UNILAG Week 2026 a monumental success.
          </p>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm opacity-75">
          © 2026 IEEE UNILAG Student Branch. All rights
          reserved.
        </div>
      </div>
    </div>
  );
}