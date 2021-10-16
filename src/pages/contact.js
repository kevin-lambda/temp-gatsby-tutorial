import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const Contact = ({ data }) => {
  // const recipes = data.allContentfulRecipes.nodes
  return (
    <Layout>
      <SEO title="Contact " />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>get in touch</h3>
            <p>
              I'm baby air plant occupy knausgaard letterpress disrupt.
              Asymmetrical typewriter mlkshk migas aesthetic roof party hashtag
              butcher. Godard vegan shoreditch ramps sartorial. Pitchfork
              kombucha cardigan four loko, hashtag lo-fi chicharrones. Before
              they sold out taiyaki photo booth, shabby chic fixie drinking
              vinegar pork belly chia prism. Seitan cornhole flexitarian blue
              bottle scenester twee irony ennui sartorial activated charcoal
              waistcoat next level portland hammock shaman. Raw denim distillery
              blog iPhone.
            </p>
            <p>
              I'm baby air plant occupy knausgaard letterpress disrupt.
              Asymmetrical typewriter mlkshk migas aesthetic roof party hashtag
              butcher. Godard vegan shoreditch ramps sartorial. Pitchfork
              kombucha cardigan four loko, hashtag lo-fi chicharrones. Before
              they sold out taiyaki photo booth, shabby chic fixie drinking
              vinegar pork belly chia prism. Seitan cornhole flexitarian blue
              bottle scenester twee irony ennui sartorial activated charcoal
              waistcoat next level portland hammock shaman. Raw denim distillery
              blog iPhone.
            </p>
            <p>
              I'm baby air plant occupy knausgaard letterpress disrupt.
              Asymmetrical typewriter mlkshk migas aesthetic roof party hashtag
              butcher. Godard vegan shoreditch ramps sartorial. Pitchfork
              kombucha cardigan four loko, hashtag lo-fi chicharrones. Before
              they sold out taiyaki photo booth, shabby chic fixie drinking
              vinegar pork belly chia prism. Seitan cornhole flexitarian blue
              bottle scenester twee irony ennui sartorial activated charcoal
              waistcoat next level portland hammock shaman. Raw denim distillery
              blog iPhone.
            </p>
          </article>

          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xnqlynbd"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>

              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>

              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          id
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default Contact
