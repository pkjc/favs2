import {
  Box,
  Container,
  Grid,
  Card,
  Text,
  SegmentedControl,
  Divider
} from "@mantine/core";
import { UserBioCard } from "../UserBioCard/UserBioCard";
import { SidebarUserCard } from "../UserBioCard/SidebarUserCard";
import { SimpleNavbar } from "../Navbar/SimpleNavbar";
import { FavsGrid } from "../Favs/FavsGrid";
import {
  simpleNavbarProps,
  userBioCardProps,
  tabsData,
  favsList2,
  sidebarUserCardProps
} from "../../pages/api.js";
import { useEffect, useState } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

export function Welcome() {
  // Access the client
  const queryClient = useQueryClient()
  async function getMovies() {
    const TMDB_POPULAR_MOVS = `https://api.themoviedb.org/3/discover/movie?api_key=5f4fbd1cb92deca8b31627ac4d56951f&language=en-US&sort_by=popularity.desc`;
    const resp = await fetch(TMDB_POPULAR_MOVS);
    const movies = await resp.json();
    return movies;
  }
  // Queries
  const getMoviesQuery = useQuery({ queryKey: ['movies'], queryFn: getMovies })
  
  return (
    <>
      <SimpleNavbar {...simpleNavbarProps} />
      <Container size="sm">
        <Grid gutter="lg">
          <Grid.Col>
            <Box mb={16}>
              <UserBioCard {...userBioCardProps} />
            </Box>
            <Divider
              my="lg"
              label={
                <Text
                  transform="uppercase"
                  weight={700}
                  color="dimmed"
                  align="center"
                  size="md"
                >
                  My Fav Movies and TV Shows
                </Text>
              }
              labelPosition="center"
            />

            {/* <SegmentedControl
              transitionDuration={500}
              transitionTimingFunction="linear"
              fullWidth
              size={"md"}
              data={tabsData}
              mb={16}
            /> */}
            {getMoviesQuery.isLoading ? 'Loading...' : getMoviesQuery.isError
              ? 'Error!' : getMoviesQuery.data
              ? <FavsGrid favsList={getMoviesQuery.data.results} /> : null}
          </Grid.Col>
          {/* <Grid.Col md={4}>
            <Card p="md" withBorder>
              <Text transform="uppercase" weight={700} color="dimmed" mb="sm">
                Popular Favorites
              </Text>
              <SidebarUserCard {...sidebarUserCardProps} />
            </Card>
          </Grid.Col> */}
        </Grid>
      </Container>
    </>
  );
}
