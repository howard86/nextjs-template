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
  rel: "noopener noreferrer",
  target: "_blank",
} as const;

export default function Home() {
  const { data, isSuccess, fulfilledTimeStamp } = useGetNameQuery();

  return (
    <Container
      display="flex"
      flexDirection="column"
      maxWidth="4xl"
      minHeight="100dvh"
    >
      <Box
        alignItems="center"
        as="main"
        display="flex"
        flex="1"
        flexDirection="column"
        py="8"
      >
        <Heading as="h1">
          Welcome to{" "}
          <Link href="https://nextjs.org" {...externalLinkProps}>
            Next.js!
          </Link>
        </Heading>
        <Text fontSize="lg" fontWeight="semibold">
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

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap="4"
          mt={{ base: 4, lg: 16, md: 12 }}
        >
          <Link href="https://nextjs.org/docs" {...externalLinkProps}>
            <Heading as="h3">Documentation &rarr;</Heading>
            <Text>
              Find in-depth information about Next.js features and API.
            </Text>
          </Link>

          <Link href="https://nextjs.org/learn" {...externalLinkProps}>
            <Heading as="h3">Learn &rarr;</Heading>
            <Text>
              Learn about Next.js in an interactive course with quizzes!
            </Text>
          </Link>

          <Link
            href="https://github.com/vercel/next.js/tree/master/examples"
            {...externalLinkProps}
          >
            <Heading as="h3">Examples &rarr;</Heading>
            <Text>
              Discover and deploy boilerplate example Next.js projects.
            </Text>
          </Link>

          <Link href="https://vercel.com/new" {...externalLinkProps}>
            <Heading as="h3">Deploy &rarr;</Heading>
            <Text>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </Text>
          </Link>
        </SimpleGrid>
      </Box>

      <Box
        alignItems="center"
        as="footer"
        borderTopColor="gray.300"
        borderTopWidth="1px"
        display="flex"
        justifyContent="center"
        py="2"
      >
        <Link
          alignItems="center"
          display="flex"
          flexGrow="1"
          href="https://vercel.com"
          justifyContent="center"
          {...externalLinkProps}
        >
          Powered by{" "}
          <Image alt="Vercel Logo" height={64} src={vercelLogo} width={64} />
        </Link>
      </Box>
    </Container>
  );
}
