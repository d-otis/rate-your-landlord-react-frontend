import React, { useState } from 'react'
import ReviewInput from '../reviews/ReviewInput'
import ReviewsList from '../reviews/ReviewsList'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const Property = ({ match, properties, landlords }) => {

  let { propertyId } = match.params

  const [ showReviewInput, setShowReviewInput ] = useState(false)

  const property = properties[propertyId]
  
  const getLandlordName = id => {
    const landlord = landlords[id]
    return landlord?.name
  }

  const getLandlordRating = id => {
    const landlord = landlords[id]
    return landlord?.rating
  }

  const generateLandlordLink = landlordId => {
    return <Link to={`/landlords/${landlordId}`}><h3 className="mb-0">{getLandlordName(landlordId)}</h3></Link>
  }

  const toggleShowReviewInput = () => setShowReviewInput(!showReviewInput)

  const generateImage = () => {
    const url = property.hasImage ? property.imageUrl : "/house-placeholder.png"

    return <img className="rounded-lg" src={url} width="100%" alt="" />
  }

  const generateProperty = () => {
   return (
    <React.Fragment>
    <Container className="mt-5"> {/*<!-- Property Show Container -->*/}
      <Row>
        <Col sm={12} className="text-center">
          <h1>{property.address}</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={8}> {/*Property Photo Column*/}
          {generateImage()}
        </Col> {/*Property Photo Column*/}
        <Col sm={4} className="bg-light text-center rounded-lg border" > {/*Landlord Meta Column*/}

          <Container> {/*Landlord Meta Container*/}
            <Row className="my-5" > {/*Landlord Meta Inner Row*/}
              <Col>{/*Landlord Name Column*/}

                {generateLandlordLink(property.landlordId)}
                <small>landlord</small>
              </Col>{/*Landlord Name Column*/}
            </Row> {/*Landlord Meta Inner Row*/}

            <Row className="my-5"> {/*Rating Row*/}
              <Col className="landlord-rating"> {/*Landlord Rating Column*/}

                <h1><span className="bg-secondary text-white rounded-lg p-2">{getLandlordRating(property.landlordId)}</span></h1>

                <small><em>landlord rating</em></small>
              </Col> {/*Landlord Rating Column*/}
            <Col className="property-rating"> {/*Property Rating Column*/}

                <h1><span className="bg-secondary text-white rounded-lg p-2">{property.rating}</span></h1>

                <small><em>property rating</em></small>
              </Col> {/*Property Rating Column*/}
            </Row> {/*Rating Row*/}

            <Row className="cta-review-row my-5">{/*Call to action */}
              <Col className="cta-review-col">
                {showReviewInput || <Button variant="secondary btn-lg" onClick={toggleShowReviewInput}>Leave a Review</Button>}
              </Col>
            </Row>{/*Call to action */}

          </Container> {/*Landlord Meta Container*/}

        </Col> {/*Landlord Meta Column*/}
        
        
        
      </Row>

      {/*<!-- Property Show Container -->*/}
     </Container> 
     {showReviewInput && <ReviewInput propertyId={propertyId} setShowReviewInput={setShowReviewInput} toggleShowReviewInput={toggleShowReviewInput} />}
     <ReviewsList property={property} />
     </React.Fragment>
    )
  }

  return (
    <div>
      {property && generateProperty()}
    </div>
  )
}

export default Property