import { ReactNode } from "react";
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

export function WhatWeDo() {
  return (
    <Box bg={"gray.800"} position={"relative"}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: "none", lg: "flex" }}
        backgroundImage="url('/templates/stats-grid-with-image.png')"
        backgroundSize={"cover"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={"absolute"}
        width={"full"}
        insetY={0}
        right={0}
      >
        <Flex
          bgGradient={"linear(to-r, gray.800 10%, transparent)"}
          w={"full"}
          h={"full"}
        />
      </Flex>
      <Container
        maxW={"8xl"}
        zIndex={10}
        position={"relative"}
        marginLeft={"2.5"}
        marginRight={"2.5"}
      >
        <Stack direction={{ base: "column", lg: "row" }}>
          <Stack
            color={"gray.400"}
            justify={{ lg: "center" }}
            py={{ base: 4, md: 20, xl: 60 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={"heading"}
                fontWeight={700}
                textTransform={"uppercase"}
                mb={3}
                fontSize={"xl"}
                color={"gray.500"}
              >
                About Us
              </Text>
              <Heading
                color={"white"}
                mb={5}
                fontSize={{ base: "3xl", md: "5xl" }}
              >
                Skyways Global Services
              </Heading>
              <Text fontSize={"xl"} color={"gray.400"}>
                Skyways Global Services Ltd is a human resource consultancy firm
                based in Nairobi, Kenya with plans of opening branches in other
                East African countries and beyond. We strive to bring efficacy,
                efficiency and commitment to our work as a firm keen to serve
                their clientele with utmost dedication and efficiency while
                endeavoring to provide high quality customer service, through
                the application of the principles of partnership with our
                clients.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={"heading"}
                    fontSize={"3xl"}
                    color={"white"}
                    mb={3}
                  >
                    {stat.title}
                  </Text>
                  <Text fontSize={"xl"} color={"gray.400"}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={"span"} fontWeight={700} color={"white"}>
    {children}
  </Text>
);

const stats = [
  {
    title: "Recruiment",
    content: (
      <>
        <StatsText>Skyways Global Services </StatsText>
        offers outsourcing services in recruitment. We carry out talent
        acquisition on behalf of our client ensuring that the client gets the
        best persons to fill the positions they intend to fill. We provide a
        holistic solution to ensure that our clients focus on their core
        business therefore increasing strategic efficiencies in their business
        operations. We recruit personnel ranging from lower to senior positions
        including but not limited to managers, accountants, hospitality
        industry, security guards, drives , cleaners among others. Skyways
        Global Services Ltd further offers vacancy advertising, short listing
        and interviewing services and finally recommends a short list for
        further consideration by our client or the best candidate to fill a
        given position. A team of highly qualified and experienced Human
        Resource experts are involved in carrying out this exercise using HR
        best practices
      </>
    ),
  },
  {
    title: "Background Checks",
    content: (
      <>
        <StatsText> Recruitment process </StatsText> is a highly expensive and
        time consuming exercise that has significant bottom line impact to any
        organisation therefore creating the need for organisations to get it
        right the first time. Skyways Global Services Ltd therefore, recognises
        the need for organisations to hire authentic and competent staff for
        smooth running of business and maximum productivity. We provide a
        crucial service to our clients of carrying out career and academic
        background checks of their prospective employees to ensure the hiring
        firm does not suffer deception that would ultimately affect the
        functionality of the organisation or part of the organisation. Further,
        we have a clear framework of gathering information from candidates’
        referees from which we provide potential employers with structured
        reports.
      </>
    ),
  },
  {
    title: "Training and Capacity Building",
    content: (
      <>
        <StatsText>For maximum</StatsText> productivity and continued relevance
        in the highly competitive and dynamic business environment today, every
        organisation must ensure that they are up-to-date with the current
        market trends hence the need for consistent training of their human
        resource. In addition, the need for teamwork and good employee relations
        in every organisation that values success cannot be overemphasised. Our
        Firm takes lead in the Kenyan and East African market in providing the
        best training for professionals. Our training is tailor-made to suit the
        needs of individual organisations to ensure effective equipping of
        employees, relevant to their industry.
      </>
    ),
  },
  {
    title: "Research",
    content: (
      <>
        <StatsText>This service</StatsText> is rendered within our Research
        division. In this division we provide feedback to the corporate and
        training institutions in regard to changing trends, demands and gaps
        within the market.
      </>
    ),
  },
];
