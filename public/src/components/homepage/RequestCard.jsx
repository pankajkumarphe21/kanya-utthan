/** @format */

import React from "react";
import { Avatar, Box, Button, Card, CardActions, CardContent, Container, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

const RequestCard = () => {
  return (
    <Box sx={{ width: "400px" }}>
      <Card>
        <CardContent>
          <Container sx={{ display: "flex" }}>
            <Card sx={{ width: "180px", height: "100px" }}>photo</Card>
            <Card sx={{ width: "180px", height: "100px" }}>photo</Card>
          </Container>
          <Typography variant="h5">Vishali kumari</Typography>
          <Divider />
          <Container>
            <Avatar></Avatar>
            <Typography>Father's Name</Typography>
          </Container>
          <Container>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Drafts" />
                </ListItemButton>
              </ListItem>
            </List>
          </Container>
        </CardContent>
        <CardActions>
            <Button variant="contained" color="error">Donate</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default RequestCard;
