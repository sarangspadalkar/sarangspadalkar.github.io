import React from "react";
import { Container, Card, CardContent, Typography, Button, Grid, IconButton, Chip, Avatar } from "@mui/material";
import { GitHub, LinkedIn, Email, Download } from "@mui/icons-material";

const portfolioData = {
    name: "Sarang Padalkar",
    title: "Senior Software Engineer | Full Stack Developer",
    location: "McKinney, TX",
    contact: {
        email: "jobs.padalkar.sarang@gmail.com",
        linkedin: "https://www.linkedin.com/in/sarang-padalkar/",
        github: "https://github.com/sarangspadalkar",
    },
    skills: [
        "JavaScript", "TypeScript", "Python", "Java", "AWS", "GCP", "Node.js", "React", "GraphQL", "Docker", "Kubernetes",
    ],
    projects: [
        {
            name: "Custom Zapier Integration",
            description: "Designed and implemented a custom OAuth 2.0 flow and REST hooks integration.",
        },
        {
            name: "AI-Driven Call Automation",
            description: "Integrated OpenAI API to enable AI-driven handling of incoming customer calls.",
        },
        {
            name: "Automated Scheduling with Google Calendar API",
            description: "Automated event creation and scheduling, reducing manual effort by 50%.",
        },
    ],
};

export default function Portfolio() {
    return (
        <Container maxWidth="md" style={{ marginTop: "20px", paddingBottom: "50px" }}>
            <Card sx={{ padding: 4, textAlign: "center", boxShadow: 3, borderRadius: 3 }}>
                <Avatar sx={{ width: 80, height: 80, margin: "auto", backgroundColor: "#1976d2" }}>
                    {portfolioData.name.charAt(0)}
                </Avatar>
                <Typography variant="h4" gutterBottom sx={{ marginTop: 2 }}>{portfolioData.name}</Typography>
                <Typography variant="h6" color="textSecondary">{portfolioData.title}</Typography>
                <Typography variant="body1" color="textSecondary">{portfolioData.location}</Typography>

                <Grid container justifyContent="center" spacing={2} sx={{ marginTop: 2 }}>
                    <Grid item>
                        <IconButton component="a" href={portfolioData.contact.github} target="_blank" color="primary">
                            <GitHub fontSize="large" />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton component="a" href={portfolioData.contact.linkedin} target="_blank" color="primary">
                            <LinkedIn fontSize="large" />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton component="a" href={`mailto:${portfolioData.contact.email}`} color="primary">
                            <Email fontSize="large" />
                        </IconButton>
                    </Grid>
                </Grid>

                <Typography variant="h5" sx={{ marginTop: 4 }}>Skills</Typography>
                <Grid container spacing={1} justifyContent="center" sx={{ marginTop: 2 }}>
                    {portfolioData.skills.map((skill, index) => (
                        <Grid item key={index}>
                            <Chip label={skill} color="primary" variant="outlined" />
                        </Grid>
                    ))}
                </Grid>

                <Typography variant="h5" sx={{ marginTop: 4 }}>Projects</Typography>
                <Grid container spacing={2} sx={{ marginTop: 2 }}>
                    {portfolioData.projects.map((project, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <Card variant="outlined" sx={{ boxShadow: 1 }}>
                                <CardContent>
                                    <Typography variant="h6">{project.name}</Typography>
                                    <Typography variant="body2" color="textSecondary">{project.description}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Button variant="contained" color="primary" sx={{ marginTop: 4 }} startIcon={<Download />}>Download Resume</Button>
            </Card>
        </Container>
    );
}
