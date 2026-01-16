export interface Person {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  color: string;
}

export const PEOPLE: Person[] = [
  {
    id: "1",
    name: "Alex Chen",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Full-stack developer passionate about building scalable applications.",
    color: "#FFE5E5"
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Creating beautiful and intuitive user experiences.",
    color: "#E5F3FF"
  },
  {
    id: "3",
    name: "Michael Park",
    role: "Data Scientist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Turning data into actionable insights and predictions.",
    color: "#FFF5E5"
  },
  {
    id: "4",
    name: "Emma Wilson",
    role: "Marketing Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Building brands and connecting with audiences.",
    color: "#E5FFE5"
  },
  {
    id: "5",
    name: "David Martinez",
    role: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Automating deployments and maintaining infrastructure.",
    color: "#F5E5FF"
  },
  {
    id: "6",
    name: "Lisa Anderson",
    role: "UX Researcher",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    bio: "Understanding user needs through research and testing.",
    color: "#FFE5F5"
  }
];
