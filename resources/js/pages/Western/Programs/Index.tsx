import React from 'react'
import WesternLayout from '../WesternLayout'
import HeaderAllPage from '../components/HeaderAllPage';
import ExchangeProgram from '../components/ExchangeProgram'; // ← make sure the path is correct
import WesternLayout2 from '../WesternLayout2';

const Index = () => {
  const Data = {
    title: 'Programs',
    long_description: '',
    images: [{ image: 'hero.JPG' }],
    children: [
      {
        id: 1,
        title: "Student Exchange Overview",
        title_kh: "ព័ត៌មានអំពីកម្មវិធីប្ដូរនិស្សិត",
        long_description: `
          <section>
  <p class="mb-4">
    The U.S. Exchange Program is an American cultural exchange where our students study abroad in one of our school partners in the United States while they live with a volunteer host family for 1 semester. This program allows our students to strengthen their skills in using the English language, learn new perspectives in life, adjust to new situations, and be independent.
  </p>
  <p class="mb-6">
    Since 2005, Western has cooperated with American partners to help bring our students abroad to study and live as exchange students. Then in 2018, we broadened the scope of this Study Program and launched it in Australia as well. Every year, about 20-40 students are being sent outside the country for this program.
  </p>

  <h2 class="text-2xl font-semibold mb-4">Why Exchange?</h2>
  
  <ol class="list-decimal space-y-4">
    <li>
      <h3 class="font-semibold">See the World</h3>
      <p>
        Have the opportunity to see the world. Experience a brand new country with incredible new outlooks, customs, and activities. See new terrains, natural wonders, museums, and landmarks.
      </p>
    </li>
    <li>
      <h3 class="font-semibold">Widen your Education</h3>
      <p>
        Encounter different styles and a broader educational system.
      </p>
    </li>
    <li>
      <h3 class="font-semibold">Take in a New Culture</h3>
      <p>
        Experience different cultural perspectives; traditions, customs, excellent cuisines, and social atmospheres. Have a better understanding and appreciation for the nation’s people and history, and witness a completely new way of life.
      </p>
    </li>
    <li>
      <h3 class="font-semibold">Sharpen Language Skills</h3>
      <p>
        Completely immerse yourself in the English language as you live in an environment that naturally speaks the language.
      </p>
    </li>
    <li>
      <h3 class="font-semibold">Discover Career Opportunities</h3>
      <p>
        Return home with a new perspective on culture, language skills, a great education, and a willingness to learn. Needless to say, all of these are very attractive to future employers. Get closer to having the opportunity to work abroad.
      </p>
    </li>
    <li>
      <h3 class="font-semibold">Find New Interests</h3>
      <p>
        Discover further activities and interests that you may have never realized before. You will also have the chance to experience other exciting forms of entertainment such as plays, movies, dance performances, and concerts.
      </p>
    </li>
    <li>
      <h3 class="font-semibold">Make Lifelong Friends</h3>
      <p>
        Have an opportunity to meet lifelong friends from different backgrounds - get to know and create lasting relationships with your fellow students abroad. In addition to rewarding personal relationships, these friends can also be important networking tools later down the road.
      </p>
    </li>
    <li>
      <h3 class="font-semibold">Improve Personal Development</h3>
      <p>
        Discover yourself while gaining an understanding of a different culture and bringing out the best in you. Exchange students become explorers of their new nation and discover the curiosity and excitement that they harbor.
      </p>
    </li>
    <li>
      <h3 class="font-semibold">Gain Life Experiences</h3>
      <p>
        The Exchange Program may be the only opportunity you may get to be abroad for a long time. Eventually, you will have to find a job and a career, and this program may turn out to be a once-in-a-lifetime opportunity.
      </p>
    </li>
  </ol>
</section>

        `,
        long_description_kh: `
          <p>កម្មវិធីប្ដូរនិស្សិតជួយឱ្យសិស្សបានស្វែងរកវប្បធម៌ថ្មីៗ
          បង្កើនជំនាញភាសា និងទទួលបទពិសោធន៍សិក្សាអន្តរជាតិ។</p>
        `,
        images: [{ image: "image1.jpg" }]
      },

      {
        id: 2,
        title: "Partner Universities",
        title_kh: "សាកលវិទ្យាល័យដើម្បីជួយសហការណ៍",
        long_description: `
          <p>Our program collaborates with prestigious universities worldwide,
          giving students access to excellent academic environments.</p>
          <ul>
            <li>Chulalongkorn University – Thailand</li>
            <li>Kyoto University – Japan</li>
            <li>University of Malaya – Malaysia</li>
          </ul>
        `,
        long_description_kh: `
          <p>កម្មវិធីនេះសហការជាមួយសាកលវិទ្យាល័យល្បីៗក្នុងពិភពលោក
          ដើម្បីផ្តល់ឱ្យសិស្សនូវបរិយាកាសសិក្សាដ៏ចំរូងចំរាស។</p>
        `,
        images: [{ image: "image1.jpg" }]
      },

      {
        id: 3,
        title: "Scholarships & Support",
        title_kh: "អាហារូបករណ៍ និងការគាំទ្រ",
        long_description: `
          <p>Eligible students may receive financial support for travel, housing,
          and tuition fees.</p>
          <p>Support includes:</p>
          <ul>
            <li>Up to 70% tuition sponsorship</li>
            <li>Monthly living allowance</li>
            <li>Travel reimbursement</li>
          </ul>
        `,
        long_description_kh: `
          <p>សិស្សដែលមានលក្ខណៈសម្បត្តិត្រូវបានផ្តល់ជូនអាហារូបករណ៍
          សម្រាប់ការធ្វើដំណើរ កន្លែងស្នាក់នៅ និងថ្លៃសិក្សា។</p>
        `,
        images: [{ image: "image1.jpg" }]
      },

      {
        id: 4,
        title: "How to Apply",
        title_kh: "របៀបដាក់ពាក្យ",
        long_description: `
          <p>Students can apply online by completing the application form and
          submitting the required documents.</p>
          <p>Required documents:</p>
          <ul>
            <li>Transcript</li>
            <li>Passport copy</li>
            <li>Recommendation letter</li>
          </ul>
        `,
        long_description_kh: `
          <p>សិស្សអាចដាក់ពាក្យតាមរយៈប្រព័ន្ធអនឡាញ ដោយបំពេញទម្រង់ និងដាក់ឯកសារចាំបាច់។</p>
        `,
        images: [{ image: "image1.jpg" }]
      }
    ]
  };

  return (
    <WesternLayout2>
      <ExchangeProgram children={Data.children} />
    </WesternLayout2>
  );
}

export default Index;
