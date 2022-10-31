import React from 'react'

import {connectTemplate, Field} from '@jaenjs/jaen'
import {graphql, PageProps} from 'gatsby'
import {GuideCategory} from '../components/GuideFilter/GuideFilter'
import GuideHeader from '../components/GuideHeader/GuideHeader'
import {GuideSkeleton} from '../components/GuideSkeleton/BlogPostSkeleton'
import MaxWidthContainer from '../components/Layout/MaxWidthContainer'
import NavbarPadding from '../components/Layout/NavbarPadding'
import PageLayout from '../components/Layout/PageLayout'
import PortableTextContainer from '../components/Layout/PortableTextContainer'
import Section from '../components/Section/Section'

function HowToTemplate(props: PageProps) {
  const isFallback = false

  if (isFallback) {
    return (
      <div className="prose">
        <NavbarPadding />
        <Section withVerticalPadding>
          <PortableTextContainer>
            <GuideSkeleton />
          </PortableTextContainer>
        </Section>
      </div>
    )
  }

  return (
    <PageLayout pathname={props.path}>
      <div className={'flex flex-col items-center'}>
        <NavbarPadding />
        <Section fullWidth withVerticalPadding>
          <GuideHeader
            content_type={
              <Field.Text name="contentType" defaultValue={'type'} />
            }
            title={<Field.Text name="title" defaultValue={'title'} />}
            subtitle={<Field.Text name="teaser" defaultValue={'teaser'} />}
            category={
              <Field.Choice
                name="category"
                defaultValue={GuideCategory.All}
                options={[
                  GuideCategory.Beginner,
                  GuideCategory.Advanced,
                  GuideCategory.All
                ]}
                render={(selectedOption, options) => (
                  <span>{selectedOption}</span>
                )}
                renderPopover={(selectedOption, options, select) => (
                  <ul>
                    {options.map(option => (
                      <li key={option} onClick={() => select(option)}>
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              />
            }
            mainImage={
              <Field.Image
                name="mainImage"
                objectFit="cover"
                defaultValue={'https://photonq.at/assets/photons.svg'}
                alt="Divider Image"
              />
            }
          />
        </Section>
        <MaxWidthContainer>
          <PortableTextContainer>
            <div className={'pb-16 lg:pb-28 2xl:pb-32 prose'}>
              <Field.Text
                name="body"
                rtf
                defaultValue={`
What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
`}
              />
            </div>
          </PortableTextContainer>
        </MaxWidthContainer>
      </div>
    </PageLayout>
  )
}

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export default connectTemplate(HowToTemplate, {
  displayName: 'HowToTemplate',
  children: []
})
