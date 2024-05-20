'use client'
import Image from 'next/image'
import React from 'react'

import { TracingBeam } from '@/components/ui/tracing-beam'

export default function ProjectStory() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-white text-black rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="md:text-md mb-4 text-white">{item.title}</p>

            <div className="text-sm text-white prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="200"
                  width="500"
                  className="rounded-lg mb-10 object-cover border"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  )
}

const dummyContent = [
  {
    title: 'Launched on 13th May,2024',
    description: (
      <>
        <p>
          The Dog&apos;s creator unveiled to the PixelVerse. Hours after its introduction, it defied
          expectations, skyrocketing to an all-time high market capitalization of 400k. But alas,
          the story took a dark turn. In a tragic twist fueled by the creator&apos;s greed, they
          seized the opportunity to dump their entire supply at the market&apos;s peak.
        </p>
      </>
    ),
    badge: 'The Miraculous Launch',
    image: '/LaunchTweet.png',
  },
  {
    title: 'Or the second Rug',
    description: (
      <>
        <p>
          A tale of resilience and collective determination. Yet, amidst the fervor, betrayal
          struck. The appointed leader, entrusted with the community&apos;s funds for the
          project&apos;s revival, succumbed to greed and vanished with 12 sol, leaving the community
          in disarray.
        </p>
      </>
    ),
    badge: 'The First CTO',
    image: '/SecondRug.png',
  },
  {
    title: 'The Saga of revival',
    description: (
      <>
        <p>
          But from the ashes of despair emerged a beacon of hope, &quot;The Saga of Revival.&quot;
          Under the leadership of a new Community Takeover, the project found new life. The
          once-forgotten dog den, now known as $dixi&apos;s den, pulsated with energy and purpose.
          With renewed vigor, the den set its sights on conquering the PixelVerse, ready to leave
          its mark on the digital landscape.
        </p>
      </>
    ),
    badge: 'Dog Rises Again',
    image: '/Totd.png',
  },
]
