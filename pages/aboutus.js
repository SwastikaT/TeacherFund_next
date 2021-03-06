import Nav from '../components/nav'
import Footer from '../components/footer'
import Head from '../components/head'
import Book from '../components/icons/book'
import GPS from '../components/icons/gps'
import Percent from '../components/icons/percent'
import '../static/styles/main.scss'
import SubsectionBasic from '../components/subsectionBasic'
import EmployeeInfo from '../components/employeeInfo'

const employees = [
  {
    imagePath: '/static/images/people/joel.jpg',
    name: 'Joel Wasserman',
    description: 'Joel is a software engineer at Google. He has formerly worked at two education startups and is passionate about public school education, technology, puzzles, and government.'
  },
  {
    imagePath: '/static/images/people/christine.jpeg',
    name: 'Christine Woeller',
    description: 'Christine is extremely passionate about the education system in her community and holds an undergraduate degree in Secondary Education. She wants to use her skill set to ensure public school students and teachers have the best resources and opportunities available.'
  },
  {
    imagePath: '/static/images/people/pete.jpeg',
    name: 'Peter Squicciarini',
    description: 'Peter is a passionate software developer who currently works at Amazon and is a loving husband/father of two. His homeschool background is just the mentality we need to objectively help children and teachers succeed in an educational environment.'
  }
]

const About = () => (
  <div className='main-container'>
    <Nav navColor='black' />
    <Head title='About' />

    <div className='body aboutusBody'>
      <SubsectionBasic
        titleText='Our Mission'
        descriptionText='The Teacher Fund is a non-profit organization
          bringing school supplies and supplemental
          funding to public school teachers to help aleviate economic pressure
          and enhance the public school learning environment.'
        buttonText=''
        image='/static/images/art-supplies.jpg'
        destination=''
      />
      <div className='factcards'>
        <div className='factcard--container'>
          <div className='factcard--fact--image'>
            <GPS />
          </div>
          <div className='factcard--fact--title'>
            <h3>We prove every project</h3>
          </div>
          <div className='factcard--fact--text'>
            <p className='p40'>
              We track every dollar spent and received, and show
              the projects you fund with photos and blog posts.
            </p>
          </div>
        </div>
        <div className='factcard--container'>
          <div className='factcard--fact--image'>
            <Book />
          </div>
          <div className='factcard--fact--title'>
            <h3>We're an open book</h3>
          </div>
          <div className='factcard--fact--text'>
            <p className='p40'>
              View our cash inflows and outflows down to the
              penny, at any time. We welcome audits! No more donating into a black box.
            </p>
          </div>
        </div>
        <div className='factcard--container'>
          <div className='factcard--fact--image'>
            <Percent percent='100' />
          </div>
          <div className='factcard--fact--title'>
            <h3>100% goes into the field</h3>
          </div>
          <div className='factcard--fact--text'>
            <p className='p40'>
              100% of your money goes towards public school education. No if's and's or but's.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className='us'>
        <div className='title'>
          <h2 className='ttu'>Get involved</h2>
        </div>
        <div className='pt-1 pb-1 text-center'>
          If you'd like to get involved, we're currently looking for a <b>web designer</b>, <b>boots on the ground volunteers
          </b> to help school supply handouts and teacher relations, and <b>non-profit law help</b>. Please reach out to
          <a className='black' href='mailto:joelwass@theteacherfund.com?subject=Application'> <u>joelwass@theteacherfund.com</u></a> to apply.
        </div>
        <div className='pt-1 pb-1 text-center'>
          Additionally, all of our code is open source and can be found at <a className='black' href='github.com/teacherfund'><u>github.com/teacherfund</u></a>
        </div>
      </div>
      <hr />
      <div className='us'>
        <div className='title'>
          <h2 className='ttu'>Who we are</h2>
        </div>
        <div className='employee--group'>
          {employees.map(({ imagePath, name, description }) => (
            <EmployeeInfo
              key={name}
              image={imagePath}
              name={name}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

export default About
