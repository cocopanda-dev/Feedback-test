import { Link } from "react-router-dom"
import Card from "../components/shared/Card.jsx"

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this Project</h1>
            <p>This is a React app to leave feedback for a product or service</p>
            <p>version: 1.0.0</p>

            <p>
                <Link to="/">Back to Homepage</Link>
            </p>
        </div>
    </Card>
    
  )
}

export default AboutPage