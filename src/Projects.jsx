import { Box, Heading, List, ListItem, ListIcon } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
const client = "[REDACTED CLIENT]";
export function Projects() {
  return (
    <Box>
      <Heading>{client}</Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>
          Client had a industry leading OTC institutional crypto-currency
          trading platform mainly build in Python and C
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>
          Design SQL-based schema for data migration from their No-SQL mongodb
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>
          Model and Build migrations from their database to ours
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>
          Wireframe and execute multiple dashboards using Power BI to provide
          leadership insight into active postions of clients and trading floor
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>
          Optimize performance of migrations and consumptions for closer to
          real-time insight
        </ListItem>
      </List>
      <Heading>{client}</Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>
          Organize, Structure, and Document existing data sources
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>Design and Model
          infrastructure for data warehouse
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>
          Collaborate with stakeholders to document requirements of reporting
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>
          Wireframe required KPI's based on department reporting into dashboards
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>
          Migrate and validate existing and new data quality in new
          infrastructure
        </ListItem>
      </List>
      <Heading>MJM Real Estate Holdings</Heading>
      <List spaceing={3}>
        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>
          Document budgetary and geographic constraint to investment thesis
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>
          Identify probable regions and properties based on investment
          constraints
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>
          Scrape public investment information from government sources and merge
          with historic data from real estate api
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>
          Model potential revenue based off comps of targeted properties and
          weights from potential public investment
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>
          Plan and execute tenant pre-move in renovations and screenings
        </ListItem>
      </List>
    </Box>
  );
}
