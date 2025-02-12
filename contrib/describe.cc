#include <sourcemeta/blaze/compiler.h>

#include <iostream> // std::cerr, std::cout

void describe_instructions(const auto &instructions, auto indent = 0) {
  for (const auto &instruction : instructions) {
    for (int i = 0; i < indent; i++) {
      std::cout << "  ";
    }

    std::ostringstream stream;
    sourcemeta::core::stringify(instruction.relative_instance_location, stream);

    std::cout << sourcemeta::blaze::step_name(instruction) << " "
              << stream.str() << "\n";

    describe_instructions(instruction.children, indent + 1);
  }
}

auto main(int argc, char **argv) noexcept -> int {
  if (argc < 2) {
    std::cerr << "Usage: " << argv[0] << " <schema.json>\n";
    return EXIT_FAILURE;
  }

  const auto schema{sourcemeta::core::read_json(argv[1])};
  const auto schema_template{sourcemeta::blaze::compile(
      schema, sourcemeta::core::schema_official_walker,
      sourcemeta::core::schema_official_resolver,
      sourcemeta::blaze::default_schema_compiler)};
  describe_instructions(schema_template.instructions, 0);
}
