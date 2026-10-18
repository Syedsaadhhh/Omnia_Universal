import { Intro, Action } from "@/components/ui";
export default function NotFound() {
  return (
    <Intro
      title="This page could not be found."
      actions={
        <>
          <Action href="/" primary>
            Return home
          </Action>
          <Action href="/projects">Explore the work</Action>
        </>
      }
    >
      <p>
        The link may have changed, or this page may not exist. You can return to
        the lab's home, inspect the work archive or use the navigation.
      </p>
    </Intro>
  );
}
