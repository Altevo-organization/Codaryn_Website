import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateMetadata as createMetadata } from "@/lib/seo";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import { DemoExperience } from "@/components/projects/DemoExperience";

interface DemoPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: DemoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return createMetadata({ title: "Démo introuvable", description: "", path: `/realisations/${slug}/demo`, noIndex: true });
  }
  return createMetadata({
    title: `Démo - ${project.title}`,
    description: `Découvrez la démo interactive de ${project.title}. ${project.description}`,
    path: `/realisations/${project.slug}/demo`,
  });
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <DemoExperience project={project} />;
}
