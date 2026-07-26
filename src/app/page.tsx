"use client";

import {
  Box,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

import { useGetNameQuery } from "@/features/name/api";
import vercelLogo from "../../public/vercel.svg";

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export default function Home() {
  const { data, isSuccess, fulfilledTimeStamp } = useGetNameQuery();

  return (
    <Container
      display="flex"
      flexDirection="column"
      minHeight="100dvh"
      maxWidth="4xl"
    >
      <Box
        as="main"
        py="8"
        display="flex"
        flexDirection="column"
        alignItems="center"
        flex="1"
      >
        <Heading as="h1">
          Welcome to{" "}
          <Link href="https://nextjs.org" {...externalLinkProps}>
            Next.js!
          </Link>
        </Heading>
        <Text fontWeight="semibold" fontSize="lg">
          Go to{" "}
          <Link asChild>
            <NextLink href="/new-page">New Page</NextLink>
          </Link>
        </Text>

        <Skeleton loading={!isSuccess}>
          {data && fulfilledTimeStamp ? (
            <Text>
              Local API <Text as="code">/hello</Text> processed {data.data.name}{" "}
              within {fulfilledTimeStamp - data.data.timestamp}ms
            </Text>
          ) : (
            <Text>Loading local API</Text>
          )}
        </Skeleton>

        <Text mt="8">
          Get started by editing <Text as="code">src/app/page.tsx</Text>
        </Text>

        <SimpleGrid gap="4" columns={{ base: 1, md: 2 }} mt={{ base: 4, md: 12, lg: 16 }}>
          <Link href="https://nextjs.org/docs" {...externalLinkProps}>
            <Heading as="h3">Documentation &rarr;</Heading>
            <Text>Find in-depth information about Next.js features and API.</Text>
          </Link>

          <Link href="https://nextjs.org/learn" {...externalLinkProps}>
            <Heading as="h3">Learn &rarr;</Heading>
            <Text>Learn about Next.js in an interactive course with quizzes!</Text>
          </Link>

          <Link
            href="https://github.com/vercel/next.js/tree/master/examples"
            {...externalLinkProps}
          >
            <Heading as="h3">Examples &rarr;</Heading>
            <Text>Discover and deploy boilerplate example Next.js projects.</Text>
          </Link>

          <Link
            href="https://vercel.com/new"
            {...externalLinkProps}
          >
            <Heading as="h3">Deploy &rarr;</Heading>
            <Text>Instantly deploy your Next.js site to a public URL with Vercel.</Text>
          </Link>
        </SimpleGrid>
      </Box>

      <Box
        as="footer"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderTopWidth="1px"
        borderTopColor="gray.300"
        py="2"
      >
        <Link
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexGrow="1"
          href="https://vercel.com"
          {...externalLinkProps}
        >
          Powered by{" "}
          <Image src={vercelLogo} alt="Vercel Logo" width={64} height={64} />
        </Link>
      </Box>
    </Container>
  );
}
